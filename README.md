# SEO Automation System

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Python 3.12+](https://img.shields.io/badge/python-3.12+-blue.svg)](https://www.python.org/downloads/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black)](https://nextjs.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue)](https://www.docker.com/)
[![N8N](https://img.shields.io/badge/N8N-Workflows-orange)](https://n8n.io/)

An intelligent, automated system for SEO content creation, optimization, and workflow management. Combines AI-powered content generation with modern web technologies and automation workflows to streamline SEO processes.

## 🌟 Features

- **🤖 AI-Powered Content Generation**: Leverages OpenAI's advanced language models for high-quality article creation
- **⚡ Workflow Automation**: N8N-powered automation for complex SEO and content workflows
- **📊 Google Sheets Integration**: Seamless content tracking and management
- **🎨 Modern Web Interface**: Built with Next.js, React, and Tailwind CSS
- **🐳 Containerized Deployment**: Full Docker support for easy deployment and scaling
- **🔄 Webhook Integration**: RESTful APIs for external system integration
- **📈 SEO Optimization**: Automated content analysis and optimization suggestions
- **🔒 Secure & Scalable**: Production-ready architecture with proper security practices

## 📋 Table of Contents

- [Objective](#-objective)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [API Reference](#-api-reference)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Objective

The SEO Automation System revolutionizes content creation workflows by automating the entire SEO content lifecycle. From ideation to publication, the system handles:

- **Content Generation**: AI-powered article creation with SEO optimization
- **Workflow Orchestration**: Automated content approval, editing, and publishing processes
- **Performance Tracking**: Real-time analytics and content performance monitoring
- **Integration Management**: Seamless connection with CMS, social media, and marketing tools

## 📋 Prerequisites

Before running this application, ensure you have the following installed:

- **Python 3.12 or higher**
- **Node.js 18+ and npm**
- **Docker and Docker Compose**
- **uv (Python package manager)**
- **Git**

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd seo-automation-system
```

### 2. Backend Setup

```bash
# Install Python dependencies using uv
uv sync

# Activate virtual environment
source .venv/bin/activate
```

### 3. Frontend Setup

```bash
cd apps/frontend

# Install Node.js dependencies
npm install

# Return to root directory
cd ../..
```

### 4. Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Google Sheets Integration
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_google_sheet_id

# N8N Configuration (if running locally)
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=your_secure_password
N8N_ENCRYPTION_KEY=your_encryption_key
```

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for content generation | Yes |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Google Service Account email | No |
| `GOOGLE_PRIVATE_KEY` | Google Service Account private key | No |
| `GOOGLE_SHEET_ID` | Google Sheet ID for content tracking | No |
| `N8N_*` | N8N workflow engine configuration | No |

### Docker Services

The system uses Docker Compose to orchestrate multiple services:

- **N8N**: Workflow automation platform
- **Frontend**: Next.js web application
- **Backend**: Python API server
- **Database**: Data persistence (if configured)

## 🎮 Usage

### Development Mode

1. **Start N8N Workflow Engine**:
   ```bash
   docker-compose up -d n8n
   ```

2. **Start Frontend Development Server**:
   ```bash
   cd apps/frontend
   npm run dev
   ```

3. **Run Backend Server**:
   ```bash
   python main.py
   ```

### Production Mode

```bash
# Build and start all services
docker-compose up --build -d

# View service logs
docker-compose logs -f

# Stop all services
docker-compose down
```

### Accessing the Application

- **Frontend Interface**: http://localhost:3000
- **N8N Dashboard**: http://localhost:5678
- **API Endpoints**: Available through configured webhooks

## 🔌 API Reference

### Article Ingestion Webhook

Submit articles for processing through the N8N workflow system.

**Endpoint**: `POST /webhook-test/article-ingest`

**Content-Type**: `application/json`

**Request Body**:
```json
{
  "title": "Article Title",
  "content": "Full article content here...",
  "category": "Article Category",
  "author": "Author Name",
  "tags": ["tag1", "tag2", "tag3"]
}
```

**Example Request**:
```bash
curl -X POST "https://your-n8n-instance.com/webhook-test/article-ingest" \
-H "Content-Type: application/json" \
-d '{
  "title": "SEO Best Practices 2024",
  "content": "Comprehensive guide to modern SEO techniques...",
  "category": "SEO",
  "author": "Content Team",
  "tags": ["SEO", "Content Marketing", "2024"]
}'
```

**Response**: Workflow execution confirmation with processing status.

## 📁 Project Structure

```
seo-automation-system/
├── apps/
│   └── frontend/                 # Next.js React application
│       ├── src/
│       │   ├── app/             # Next.js app router
│       │   │   ├── globals.css  # Global styles
│       │   │   ├── layout.tsx   # Root layout
│       │   │   └── page.tsx     # Home page
│       │   ├── components/      # Reusable React components
│       │   │   ├── ArticleForm.tsx  # Article submission form
│       │   │   └── ui/          # UI component library
│       │   ├── hooks/           # Custom React hooks
│       │   │   └── useArticleSubmit.ts  # Submission logic
│       │   ├── lib/             # Utility functions
│       │   │   ├── api.ts       # API client
│       │   │   ├── idempotency.ts  # Request deduplication
│       │   │   └── validation.ts # Form validation
│       │   └── types/           # TypeScript definitions
│       │       └── article.ts   # Article types
│       ├── public/              # Static assets
│       ├── package.json         # Node dependencies
│       ├── tailwind.config.*    # Tailwind configuration
│       └── tsconfig.json        # TypeScript config
├── artifacts/                   # Generated content & workflows
│   ├── expected_outputs/        # Sample outputs
│   ├── test_payloads/           # Test data
│   └── workflows/               # N8N workflow definitions
├── infra/                       # Infrastructure configs
│   └── docker/
│       └── nginx/               # Web server config
├── logs/                        # Application logs
├── scripts/                     # Utility scripts
├── services/                    # External service configs
│   └── n8n/                     # N8N automation
│       ├── config/              # N8N configuration
│       ├── data/                # Persistent data
│       └── logs/                # Service logs
├── tests/                       # Test suites
│   ├── e2e/                     # End-to-end tests
│   └── integration/             # Integration tests
├── .env                         # Environment variables
├── docker-compose.yml           # Service orchestration
├── main.py                      # Python backend entry
├── pyproject.toml               # Python project config
├── uv.lock                      # Dependency lock file
└── README.md                    # This documentation
```

## 💻 Development

### Code Style Guidelines

- **Python**: Follow PEP 8 standards
- **TypeScript**: Use ESLint configuration
- **React**: Implement functional components with hooks
- **Git**: Use conventional commit messages

### Running Tests

```bash
# Python tests
pytest

# Frontend tests
cd apps/frontend && npm test

# End-to-end tests
npm run test:e2e
```

### Adding New Features

1. **Frontend Features**: Add components in `apps/frontend/src/components/`
2. **Backend APIs**: Extend `main.py` or create new modules
3. **Workflows**: Design in N8N dashboard and export to `artifacts/workflows/`

## 🚢 Deployment

### Docker Deployment

```bash
# Production deployment
docker-compose -f docker-compose.yml up --build -d

# Development with hot reload
docker-compose -f docker-compose.dev.yml up --build
```

### Environment-Specific Configurations

- **Development**: `docker-compose.dev.yml`
- **Production**: `docker-compose.yml`
- **CI/CD**: Configure pipelines for automated testing and deployment

### Scaling Considerations

- Use Docker Swarm or Kubernetes for production scaling
- Configure load balancers for high availability
- Implement proper logging and monitoring solutions

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature`
3. **Make your changes** following code style guidelines
4. **Add tests** for new functionality
5. **Commit changes**: `git commit -m 'feat: add new feature'`
6. **Push to branch**: `git push origin feature/your-feature`
7. **Create a Pull Request**

### Development Setup

```bash
# Clone and setup
git clone <your-fork-url>
cd seo-automation-system

# Install dependencies
uv sync
cd apps/frontend && npm install && cd ../..

# Copy environment file
cp .env.example .env
# Edit .env with your API keys

# Start development environment
docker-compose -f docker-compose.dev.yml up -d
```

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [N8N](https://n8n.io/) - Workflow automation platform
- [OpenAI](https://openai.com/) - AI content generation
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Docker](https://www.docker.com/) - Containerization platform

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/your-repo/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-repo/discussions)
- **Documentation**: [Project Wiki](https://github.com/your-repo/wiki)

---

**Automate your SEO workflow with AI-powered precision! 🚀**
