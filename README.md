# 🚀 React Learning Journey

<div align="center">

![React Logo](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**A comprehensive repository documenting my React learning adventure** 🎯

[🔗 Live Demo](#live-demos) | [📚 Documentation](#documentation) | [🛠️ Setup](#installation) | [🤝 Contributing](#contributing)

---

### 📊 Learning Progress

```
React Fundamentals    ████████████████████ 100%
Components & JSX      ████████████████████ 100%
Hooks & State         ██████████████████░░  90%
Routing              ████████████████░░░░  80%
State Management     ████████████░░░░░░░░  60%
Testing              ██████░░░░░░░░░░░░░░  30%
```

</div>

## 🌟 What You'll Find Here

This repository contains my hands-on learning experience with React, featuring:

- 📁 **Project Examples** - Real-world applications built from scratch
- 🧪 **Experiments** - Code snippets and proof-of-concepts
- 📝 **Notes** - Personal learning notes and best practices
- 🔧 **Utilities** - Reusable components and helper functions

## 🎯 Learning Objectives

<details>
<summary>🔍 Click to expand learning goals</summary>

### Core Concepts
- [x] Understanding React components and JSX
- [x] Props and state management
- [x] Event handling and lifecycle methods
- [x] Conditional rendering and lists
- [ ] Context API and advanced patterns

### Hooks Mastery
- [x] useState and useEffect
- [x] useContext and useReducer
- [ ] useMemo and useCallback
- [ ] Custom hooks development

### Advanced Topics
- [ ] React Router for navigation
- [ ] State management with Redux/Zustand
- [ ] Testing with Jest and React Testing Library
- [ ] Performance optimization techniques

</details>

## 📂 Project Structure

```
react-learn/
├── 📁 01-basics/
│   ├── components-intro/
│   ├── props-and-state/
│   └── event-handling/
├── 📁 02-intermediate/
│   ├── hooks-deep-dive/
│   ├── context-api/
│   └── routing/
├── 📁 03-advanced/
│   ├── performance/
│   ├── testing/
│   └── patterns/
├── 📁 projects/
│   ├── todo-app/
│   ├── weather-dashboard/
│   └── e-commerce-cart/
└── 📁 resources/
    ├── cheatsheets/
    ├── snippets/
    └── notes/
```

## 🚀 Featured Projects

### 📋 Todo Application
**Skills:** useState, useEffect, Local Storage
- ✅ Add/Remove tasks
- ✅ Mark as complete
- ✅ Filter functionality
- ✅ Persistent storage

[📖 View Code](./projects/todo-app) | [🌐 Live Demo](#)

### 🌤️ Weather Dashboard
**Skills:** API Integration, useEffect, Error Handling
- 🌡️ Real-time weather data
- 📍 Location-based forecasts
- 📱 Responsive design
- ⚡ Loading states

[📖 View Code](./projects/weather-dashboard) | [🌐 Live Demo](#)

### 🛒 E-commerce Cart
**Skills:** Context API, useReducer, Custom Hooks
- 🛍️ Product catalog
- 🛒 Shopping cart functionality
- 💳 Checkout process
- 📊 Order summary

[📖 View Code](./projects/e-commerce-cart) | [🌐 Live Demo](#)

## 🛠️ Installation

### Prerequisites
```bash
node >= 14.0.0
npm >= 6.0.0
```

### Quick Start
```bash
# Clone the repository
git clone https://github.com/yourusername/react-learn.git

# Navigate to project
cd react-learn

# Install dependencies
npm install

# Start development server
npm start
```

### Individual Module Setup
```bash
# Navigate to specific learning module
cd usememo-hook

# Install dependencies (if package.json exists)
npm install

# Run the module
npm start  # or npm run dev for Vite projects

# For modules with multiple examples
cd conditional-rendering
ls  # View available examples
cd example-1 && npm start
```

## 📖 How to Navigate This Repository

### 🎯 **For Beginners**
Start with these modules in order:
1. [Intro_REACT](./Intro_REACT) - Basic setup and concepts
2. [intro-two](./intro-two) - useState and basic state
3. [props-four](./props-four) - Component communication
4. [event-handling](./event-handling) - User interactions
5. [conditional-rendering](./conditional-rendering) - Dynamic UI

### 🎣 **For Hook Enthusiasts**
Deep dive into React Hooks:
1. [useeffect-hook](./useeffect-hook) - Side effects and lifecycle
2. [usecontext-hook](./usecontext-hook) - Global state management
3. [useref-hook](./useref-hook) - DOM access and persistence
4. [usememo-hook](./usememo-hook) - Performance optimization
5. [usecallback-hook](./usecallback-hook) - Function memoization
6. [hook-three](./hook-three) - Custom hooks creation

### 🚀 **For Advanced Learners**
Complex topics and patterns:
1. [state-lifting](./state-lifting) - Component architecture
2. [redux-toolkit](./redux-toolkit) - Advanced state management
3. [routing-react](./routing-react) - SPA navigation
4. [theme-project](./theme-project) - Context API in practice

### 📝 **Quick Reference**
- [Notes](./Notes) - Consolidated learning notes
- Each folder contains its own README with specific instructions
- Look for `package.json` to identify runnable projects

## 📚 Learning Resources

<details>
<summary>📖 Recommended Reading & Tutorials</summary>

### Official Documentation
- [React Official Docs](https://react.dev/)
- [Create React App](https://create-react-app.dev/)

### Tutorials & Courses
- [React Tutorial for Beginners](https://reactjs.org/tutorial/tutorial.html)
- [Modern React with Hooks](https://www.example.com)
- [Advanced React Patterns](https://www.example.com)

### YouTube Channels
- [React Official Channel](https://www.youtube.com/@reactjs)
- [Traversy Media](https://www.youtube.com/@TraversyMedia)
- [The Net Ninja](https://www.youtube.com/@NetNinja)

</details>

## 📝 Key Learnings & Notes

### 💡 React Hooks Best Practices
- Always call hooks at the top level
- Use custom hooks for reusable stateful logic
- Optimize with useMemo and useCallback when needed

### 🎨 Component Design Patterns
- Keep components small and focused
- Use composition over inheritance
- Implement proper prop validation

### 🚀 Performance Tips
- Minimize re-renders with React.memo
- Use lazy loading for code splitting
- Optimize bundle size with tree shaking

## 🧪 Code Snippets

<details>
<summary>🔧 Useful React Snippets</summary>

### Custom Hook Example
```javascript
// useLocalStorage hook
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
```

### Error Boundary Component
```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

</details>

## 📈 Learning Timeline

| Week | Topic | Status |
|------|-------|--------|
| 1-2  | React Basics & JSX | ✅ Completed |
| 3-4  | Components & Props | ✅ Completed |
| 5-6  | State & Event Handling | ✅ Completed |
| 7-8  | Hooks Introduction | ✅ Completed |
| 9-10 | Advanced Hooks | 🔄 In Progress |
| 11-12| Context API & Patterns | 📅 Planned |
| 13-14| Routing & Navigation | 📅 Planned |
| 15-16| Testing & Optimization | 📅 Planned |

## 🤝 Contributing

Found a bug or want to contribute? Here's how you can help:

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📬 Get in Touch

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourprofile)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/yourhandle)
[![Portfolio](https://img.shields.io/badge/Portfolio-255E63?style=for-the-badge&logo=About.me&logoColor=white)](https://yourportfolio.com)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your.email@example.com)

</div>

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ and lots of ☕

*Last updated: September 2025*

</div>
