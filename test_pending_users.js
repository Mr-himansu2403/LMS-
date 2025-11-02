const axios = require('axios');

async function testPendingUsers() {
    console.log('Testing pending users endpoint...\n');
    
    try {
        // First, login as admin
        console.log('1. Logging in as admin...');
        const loginResponse = await axios.post('http://localhost:8082/api/auth/login', {
            email: 'admin@sparc.com',
            password: 'admin123'
        });
        
        const token = loginResponse.data.token;
        console.log('✅ Login successful');
        console.log('Token received:', token ? 'Yes' : 'No');
        console.log('Role:', loginResponse.data.role);
        console.log('');
        
        // Test pending users endpoint
        console.log('2. Testing pending users endpoint...');
        const pendingResponse = await axios.get('http://localhost:8082/api/users/pending', {
            headers: { Authorization: `Bearer ${token}` }
        });
        
        console.log('✅ Pending users endpoint working');
        console.log('Pending users count:', pendingResponse.data.length);
        console.log('Response data:', JSON.stringify(pendingResponse.data, null, 2));
        
    } catch (error) {
        console.log('❌ Error occurred:');
        console.log('Status:', error.response?.status);
        console.log('Message:', error.response?.data);
        console.log('Full error:', error.message);
    }
}

testPendingUsers().catch(console.error); 