# SEO Automation System

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Python 3.12+](https://img.shields.io/badge/python-3.12+-blue.svg)](https://www.python.org/downloads/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black)](https://nextjs.org/)

## Objective

The SEO Automation System is designed to streamline and automate the process of creating, optimizing, and managing SEO content. It combines AI-powered content generation with workflow automation to help content creators and marketers produce high-quality, SEO-optimized articles efficiently. The system integrates with Google Sheets for content management and uses N8N for complex automation workflows.

Key capabilities:
- AI-powered article generation using OpenAI
- Automated SEO optimization and analysis
- Content workflow management via N8N
- Google Sheets integration for content tracking
- Modern web interface for content submission and management

## Project Structure

```
seo-automation-system/
├── apps/
│   └── frontend/                 # Next.js React application
│       ├── src/
│       │   ├── app/             # Next.js app router pages
│       │   │   ├── globals.css  # Global styles
│       │   │   ├── layout.tsx   # Root layout component
│       │   │   └── page.tsx     # Home page component
│       │   ├── components/      # Reusable React components
│       │   │   ├── ArticleForm.tsx  # Article submission form
│       │   │   └── ui/          # UI component library
│       │   ├── hooks/           # Custom React hooks
│       │   │   └── useArticleSubmit.ts  # Article submission logic
│       │   ├── lib/             # Utility functions and configurations
│       │   │   ├── api.ts       # API client functions
│       │   │   ├── idempotency.ts  # Idempotency handling
│       │   │   └── validation.ts # Form validation utilities
│       │   └── types/           # TypeScript type definitions
│       │       └── article.ts   # Article-related types
│       ├── public/              # Static assets
│       ├── next.config.ts       # Next.js configuration
│       ├── next-env.d.ts        # Next.js type definitions
│       ├── package.json         # Node.js dependencies
│       ├── postcss.config.mjs   # PostCSS configuration
│       ├── tailwind.config.*    # Tailwind CSS configuration
│       └── tsconfig.json        # TypeScript configuration
├── artifacts/                   # Generated outputs and assets
│   ├── expected_outputs/        # Sample output files
│   ├── test_payloads/           # Test data for workflows
│   └── workflows/               # N8N workflow definitions
├── infra/                       # Infrastructure configurations
│   └── docker/                  # Docker-related files
│       └── nginx/               # Nginx configuration
│           └── conf.d/          # Nginx site configurations
├── logs/                        # Application logs
├── scripts/                     # Utility scripts
├── services/                    # External services configuration
│   └── n8n/                     # N8N workflow automation
│       ├── config/              # N8N configuration files
│       ├── data/                # N8N persistent data
│       └── logs/                # N8N service logs
├── tests/                       # Test suites
│   ├── e2e/                     # End-to-end tests
│   └── integration/             # Integration tests
├── .env                         # Environment variables (API keys, etc.)
├── .gitignore                   # Git ignore rules
├── .python-version              # Python version specification
├── docker-compose.yml           # Docker services orchestration
├── LICENSE                      # Apache 2.0 license
├── main.py                      # Python backend entry point
├── pyproject.toml               # Python project configuration
├── README.md                    # This file
└── uv.lock                      # uv dependency lock file
```

## Prerequisites

## Prerequisites

- Python 3.12+
- Node.js 18+
- Docker & Docker Compose
- uv (Python package manager)

## Installation

1. **Clone and setup Python environment:**
   ```bash
   git clone <repository-url>
   cd seo-automation-system
   uv sync
   source .venv/bin/activate
   ```

2. **Setup frontend:**
   ```bash
   cd apps/frontend
   npm install
   cd ../..
   ```

3. **Configure environment:**
   - Copy `.env` and update API keys
   - Ensure OpenAI API key is set
   - Configure Google Sheets credentials if needed

## Usage

### Development
```bash
# Start N8N workflow engine
docker-compose up -d n8n

# Start frontend (from apps/frontend/)
npm run dev

# Run backend
python main.py
```

### Production
```bash
docker-compose up --build
```

Access:
- Frontend: http://localhost:3000
- N8N Dashboard: http://localhost:5678

## Configuration

### Environment Variables
- `OPENAI_API_KEY`: Required for AI content generation
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: For Google Sheets integration
- `GOOGLE_PRIVATE_KEY`: Service account private key
- `GOOGLE_SHEET_ID`: Target Google Sheet ID

## Project Structure

```
├── apps/frontend/     # Next.js React app
├── services/n8n/      # Workflow automation
├── artifacts/         # Generated content & workflows
├── tests/            # Test suites
└── main.py           # Python backend
```

## License

Apache License 2.0 - see [LICENSE](LICENSE) file.