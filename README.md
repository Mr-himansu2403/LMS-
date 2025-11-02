# SPARC LMS - Learning Management System

A comprehensive Learning Management System built with Spring Boot backend and React frontend, featuring role-based access control, document management, and audit logging.

## 🚀 Features

### Core Functionality
- **User Authentication & Authorization**: JWT-based authentication with role-based access control
- **Notice Management**: Create, edit, and manage organizational notices with audience targeting
- **Letter Management**: Upload, manage, and control access to official letters and documents
- **Store Entries**: Track inventory and store entries with file attachments
- **Department Management**: Organize users and data by departments
- **User Management**: Complete user administration with role assignment
- **Audit Logging**: Comprehensive activity tracking for security and compliance

### Role-Based Access Control
- **ADMIN**: Full system access and management capabilities
- **DATA_STEWARD**: Can manage content within their department
- **ASSISTANT**: Limited management capabilities within their department
- **EMPLOYEE**: Basic access to assigned content
- **AUDITOR**: Read-only access to audit logs and system data

### Security Features
- JWT token-based authentication
- Role-based access control (RBAC)
- Comprehensive audit logging
- File upload security
- Password encryption
- Session management

## 🛠️ Technology Stack

### Backend
- **Spring Boot 3.3.13**: Main application framework
- **Spring Security**: Authentication and authorization
- **Spring Data JPA**: Database operations
- **PostgreSQL**: Primary database
- **JWT**: Token-based authentication
- **Maven**: Dependency management

### Frontend
- **React 18**: User interface framework
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls
- **CSS3**: Styling with modern design
- **Responsive Design**: Mobile-first approach

## 📋 Prerequisites

- Java 21 or higher
- Node.js 16 or higher
- PostgreSQL 12 or higher
- Maven 3.6 or higher

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Sparclms
```

### 2. Database Setup
1. Create a PostgreSQL database named `sparc`
2. Update database credentials in `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/sparc
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### 3. Backend Setup
```bash
# Navigate to project root
cd Sparclms

# Build the project
mvn clean install

# Run the Spring Boot application
mvn spring-boot:run
```

The backend will start on `http://localhost:8082`

### 4. Frontend Setup
```bash
# Navigate to frontend directory
cd sparc-frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will start on `http://localhost:3000`

## 🗄️ Database Schema

The application uses the following main entities:

- **Users**: User accounts with roles and departments
- **Departments**: Organizational units
- **Roles**: User permissions and access levels
- **Notices**: Organizational announcements
- **Letters**: Official documents with access control
- **Store Entries**: Inventory and store management
- **Audit Logs**: System activity tracking

## 🔐 Authentication & Authorization

### Login Process
1. Users register with email and password
2. Login with credentials to receive JWT token
3. Token is stored in localStorage for session persistence
4. All API calls include the JWT token in Authorization header

### Role Permissions

| Feature | ADMIN | DATA_STEWARD | ASSISTANT | EMPLOYEE | AUDITOR |
|---------|-------|--------------|-----------|----------|---------|
| User Management | ✅ | ❌ | ❌ | ❌ | ❌ |
| Department Management | ✅ | ❌ | ❌ | ❌ | ❌ |
| Notice Management | ✅ | ✅ | ❌ | ❌ | ❌ |
| Letter Management | ✅ | ✅ | ❌ | ❌ | ❌ |
| Store Entry Management | ✅ | ✅ | ❌ | ❌ | ❌ |
| Audit Logs | ✅ | ❌ | ❌ | ❌ | ✅ |
| View Content | ✅ | ✅ | ✅ | ✅ | ✅ |

## 📁 File Structure

```
Sparclms/
├── src/main/java/Sparc/Sparclms/
│   ├── controller/          # REST API controllers
│   ├── model/              # JPA entities
│   ├── repository/         # Data access layer
│   ├── service/           # Business logic
│   ├── security/          # Authentication & authorization
│   └── dto/              # Data transfer objects
├── src/main/resources/
│   └── application.properties
├── sparc-frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   └── styles/       # CSS files
│   └── public/
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Users
- `GET /api/users` - Get all users (ADMIN only)
- `POST /api/users` - Create user (ADMIN only)
- `PUT /api/users/{id}` - Update user (ADMIN only)
- `DELETE /api/users/{id}` - Delete user (ADMIN only)
- `GET /api/users/me` - Get current user info

### Departments
- `GET /api/departments` - Get all departments
- `POST /api/departments` - Create department (ADMIN only)
- `PUT /api/departments/{id}` - Update department (ADMIN only)
- `DELETE /api/departments/{id}` - Delete department (ADMIN only)

### Notices
- `GET /api/notices` - Get all notices
- `POST /api/notices` - Create notice (ADMIN, DATA_STEWARD)
- `PUT /api/notices/{id}` - Update notice (ADMIN, DATA_STEWARD)
- `DELETE /api/notices/{id}` - Delete notice (ADMIN only)

### Letters
- `GET /api/letters` - Get all letters
- `POST /api/letters` - Upload letter (ADMIN, DATA_STEWARD)
- `PUT /api/letters/{id}` - Update letter (ADMIN, DATA_STEWARD)
- `DELETE /api/letters/{id}` - Delete letter (ADMIN only)
- `GET /api/letters/{id}/download` - Download letter file

### Store Entries
- `GET /api/store-entries` - Get all store entries
- `POST /api/store-entries` - Create store entry (ADMIN, DATA_STEWARD)
- `PUT /api/store-entries/{id}` - Update store entry (ADMIN, DATA_STEWARD)
- `DELETE /api/store-entries/{id}` - Delete store entry (ADMIN only)
- `GET /api/store-entries/{id}/download` - Download store entry file

### Audit Logs
- `GET /api/audit-logs` - Get audit logs (ADMIN, AUDITOR)

## 🎨 UI Features

### Design System
- **Modern Glassmorphism**: Semi-transparent elements with backdrop blur
- **Responsive Grid Layout**: Adaptive card-based design
- **Consistent Color Scheme**: Blue-based professional theme
- **Smooth Animations**: Hover effects and transitions
- **Mobile-First**: Responsive design for all devices

### Components
- **Navigation**: Sticky navigation with role-based menu items
- **Forms**: Consistent form styling with validation
- **Cards**: Information display with action buttons
- **Modals**: Overlay dialogs for complex interactions
- **Alerts**: Success, error, and info notifications

## 🔒 Security Considerations

### Authentication
- JWT tokens with 10-hour expiration
- Secure password hashing with BCrypt
- Token-based session management

### Authorization
- Role-based access control (RBAC)
- Method-level security annotations
- Resource-level permissions

### Data Protection
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CSRF protection (disabled for API)

### File Security
- Secure file upload handling
- File type validation
- Virus scanning integration ready
- Access control for file downloads

## 🚀 Deployment

### Backend Deployment
1. Build the JAR file:
```bash
mvn clean package
```

2. Run the JAR file:
```bash
java -jar target/Sparclms-0.0.1-SNAPSHOT.jar
```

### Frontend Deployment
1. Build the production version:
```bash
cd sparc-frontend
npm run build
```

2. Deploy the `build` folder to your web server

## 🧪 Testing

### Backend Tests
```bash
mvn test
```

### Frontend Tests
```bash
cd sparc-frontend
npm test
```

## 📊 Monitoring & Logging

### Audit Logging
- All user actions are logged
- Includes user, action, entity, and timestamp
- Filterable by action type, entity, and date range
- Accessible to ADMIN and AUDITOR roles

### Application Logs
- Spring Boot default logging
- Configurable log levels
- File and console output

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Version History

- **v1.0.0**: Initial release with core functionality
- Complete CRUD operations for all entities
- Role-based access control
- File upload and management
- Audit logging system
- Modern responsive UI

---

**SPARC LMS** - Empowering organizations with comprehensive learning and document management capabilities. 