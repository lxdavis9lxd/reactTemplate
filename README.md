# React Scaffolding Template

A comprehensive React scaffolding project built with modern tools and components, perfect for AI agents to build upon.

## 🚀 Features

- **React 18** with Vite for fast development
- **Tailwind CSS** - Latest version for utility-first styling
- **Shadcn UI** - 40+ beautiful, accessible components
- **React Router** - Complete routing setup
- **API Service Layer** - Full CRUD operations scaffolding
- **Responsive Layout** - Pre-built Navbar and Sidebar with icons
- **TypeScript Ready** - Easy to convert to TypeScript
- **Port 3000** - Configured to run on port 3000

## 📦 Included Shadcn Components

All the following Shadcn UI components are pre-configured and ready to use:

- Alert Dialog
- Alert
- Avatar
- Badge
- Breadcrumb
- Button Group
- Button
- Calendar
- Card
- Checkbox
- Combobox
- Command
- Context Menu
- Data Table
- Date Picker
- Dropdown Menu
- Field
- Input Group
- Input
- Item
- Label
- Menubar
- Navigation Menu
- Pagination
- Popover
- Progress
- Radio Group
- Separator
- Sheet
- Sidebar
- Slider
- Spinner
- Switch
- Table
- Tabs
- Textarea
- Toggle Group
- Toggle
- Tooltip

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/              # All Shadcn UI components
│   ├── AppSidebar.jsx   # Sidebar with navigation
│   └── Navbar.jsx       # Top navigation with dropdowns
├── pages/
│   ├── HomePage.jsx     # Home page with dashboard widgets
│   ├── DashboardPage.jsx
│   ├── UsersPage.jsx    # Example data table page
│   └── SettingsPage.jsx # Settings with tabs
├── services/
│   └── api.js           # API service with CRUD operations
├── hooks/
│   └── use-mobile.js    # Mobile detection hook
├── lib/
│   └── utils.js         # Utility functions
└── App.jsx              # Main app with routing
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone or use this template:
```bash
git clone <your-repo-url>
cd reactTemplate
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔌 API Integration

The project includes a complete API service layer in `src/services/api.js`:

```javascript
import { apiService, usersApi, postsApi } from '@/services/api';

// Generic CRUD operations
apiService.getAll('users');
apiService.getById('users', 1);
apiService.create('users', data);
apiService.update('users', 1, data);
apiService.delete('users', 1);

// Specific resource APIs
usersApi.getAll();
postsApi.create(newPost);
```

Update the `VITE_API_BASE_URL` in your `.env` file to point to your backend API.

## 🎨 Customization

### Theme Colors

Customize colors in `src/index.css` by modifying CSS variables:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  /* ... more variables */
}
```

### Tailwind Config

Modify `tailwind.config.js` to add custom colors, fonts, or extend the theme.

## 🧭 Navigation

### Sidebar

The sidebar component (`src/components/AppSidebar.jsx`) includes:
- Organized menu groups
- Active route highlighting
- Icons from Lucide React
- Collapsible on mobile

### Navbar

The navbar component (`src/components/Navbar.jsx`) features:
- User profile dropdown
- Notifications dropdown with badge
- Settings dropdown with submenu
- Responsive design

## 📄 Example Pages

- **Home** (`/`) - Dashboard overview with metrics cards
- **Dashboard** (`/dashboard`) - Detailed analytics view
- **Users** (`/users`) - Data table with filtering and actions
- **Settings** (`/settings`) - Tabbed settings interface

## 🔧 Tech Stack

- **React 18** - UI library
- **Vite 7** - Build tool
- **Tailwind CSS 3** - Styling
- **Shadcn UI** - Component library
- **Radix UI** - Unstyled accessible components
- **React Router 6** - Routing
- **Lucide React** - Icons
- **TanStack Table** - Data tables
- **date-fns** - Date utilities

## 📚 Component Usage Examples

### Button
```jsx
import { Button } from '@/components/ui/button';

<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost" size="sm">Small Ghost</Button>
```

### Data Table
```jsx
import { DataTable } from '@/components/ui/data-table';

<DataTable 
  columns={columns} 
  data={data} 
  filterColumn="name" 
/>
```

### Form Fields
```jsx
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Field } from '@/components/ui/field';

<Field label="Email" error={error}>
  <Input type="email" placeholder="Enter email" />
</Field>
```

## 🤖 For AI Agents

This template is optimized for AI agents to build upon:

1. **Clear Structure** - Organized folders and files
2. **Complete Components** - All UI components ready to use
3. **API Scaffolding** - CRUD operations pre-configured
4. **Routing Setup** - React Router fully configured
5. **Example Pages** - Reference implementations included
6. **Type-Safe Paths** - Path aliases configured (`@/`)

## 📖 Documentation

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com)
- [React Router](https://reactrouter.com)

## 📄 License

MIT License - feel free to use this template for any project!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ for rapid React development
