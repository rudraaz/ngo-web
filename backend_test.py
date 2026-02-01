#!/usr/bin/env python3
"""
Backend API Testing for We Care Foundation NGO Website
Tests the FastAPI backend endpoints for status checking functionality.
"""

import requests
import json
import sys
from datetime import datetime
import os

# Get backend URL from frontend env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BACKEND_URL = get_backend_url()
if not BACKEND_URL:
    print("❌ Could not get backend URL from frontend/.env")
    sys.exit(1)

API_BASE = f"{BACKEND_URL}/api"

def test_root_endpoint():
    """Test the root API endpoint"""
    print("\n🧪 Testing Root Endpoint...")
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Root endpoint working correctly")
                return True
            else:
                print(f"❌ Root endpoint returned unexpected data: {data}")
                return False
        else:
            print(f"❌ Root endpoint failed with status {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Root endpoint test failed: {e}")
        return False

def test_create_status_check():
    """Test creating a status check"""
    print("\n🧪 Testing Create Status Check...")
    try:
        test_data = {
            "client_name": "We Care Foundation Test Client"
        }
        
        response = requests.post(
            f"{API_BASE}/status", 
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 200:
            data = response.json()
            required_fields = ["id", "client_name", "timestamp"]
            
            if all(field in data for field in required_fields):
                if data["client_name"] == test_data["client_name"]:
                    print("✅ Status check creation working correctly")
                    print(f"   Created status check with ID: {data['id']}")
                    return True, data["id"]
                else:
                    print(f"❌ Client name mismatch: expected {test_data['client_name']}, got {data['client_name']}")
                    return False, None
            else:
                missing_fields = [field for field in required_fields if field not in data]
                print(f"❌ Missing required fields in response: {missing_fields}")
                return False, None
        else:
            print(f"❌ Status check creation failed with status {response.status_code}")
            print(f"   Response: {response.text}")
            return False, None
            
    except Exception as e:
        print(f"❌ Status check creation test failed: {e}")
        return False, None

def test_get_status_checks():
    """Test retrieving status checks"""
    print("\n🧪 Testing Get Status Checks...")
    try:
        response = requests.get(f"{API_BASE}/status", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print(f"✅ Status checks retrieval working correctly")
                print(f"   Retrieved {len(data)} status checks")
                
                # Verify structure of returned data
                if data:
                    first_item = data[0]
                    required_fields = ["id", "client_name", "timestamp"]
                    if all(field in first_item for field in required_fields):
                        print("✅ Status check data structure is correct")
                        return True
                    else:
                        missing_fields = [field for field in required_fields if field not in first_item]
                        print(f"❌ Missing fields in status check data: {missing_fields}")
                        return False
                else:
                    print("✅ Empty status checks list (valid response)")
                    return True
            else:
                print(f"❌ Expected list response, got: {type(data)}")
                return False
        else:
            print(f"❌ Status checks retrieval failed with status {response.status_code}")
            print(f"   Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ Status checks retrieval test failed: {e}")
        return False

def test_api_cors():
    """Test CORS headers"""
    print("\n🧪 Testing CORS Configuration...")
    try:
        response = requests.options(f"{API_BASE}/", timeout=10)
        
        cors_headers = [
            'access-control-allow-origin',
            'access-control-allow-methods',
            'access-control-allow-headers'
        ]
        
        present_headers = []
        for header in cors_headers:
            if header in response.headers:
                present_headers.append(header)
        
        if len(present_headers) >= 2:  # At least origin and methods should be present
            print("✅ CORS headers configured correctly")
            for header in present_headers:
                print(f"   {header}: {response.headers[header]}")
            return True
        else:
            print(f"❌ Missing CORS headers. Found: {present_headers}")
            return False
            
    except Exception as e:
        print(f"❌ CORS test failed: {e}")
        return False

def main():
    """Run all backend tests"""
    print("🚀 Starting Backend API Tests for We Care Foundation NGO Website")
    print(f"🔗 Testing backend at: {API_BASE}")
    
    test_results = []
    
    # Test root endpoint
    test_results.append(test_root_endpoint())
    
    # Test status check creation
    create_success, status_id = test_create_status_check()
    test_results.append(create_success)
    
    # Test status check retrieval
    test_results.append(test_get_status_checks())
    
    # Test CORS
    test_results.append(test_api_cors())
    
    # Summary
    passed_tests = sum(test_results)
    total_tests = len(test_results)
    
    print(f"\n📊 Test Summary:")
    print(f"   Passed: {passed_tests}/{total_tests}")
    print(f"   Success Rate: {(passed_tests/total_tests)*100:.1f}%")
    
    if passed_tests == total_tests:
        print("🎉 All backend tests passed!")
        return True
    else:
        print("❌ Some backend tests failed!")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)