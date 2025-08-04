# Complete tutorial to making the app

1. Create an app named blueline with Vite.

```Terminal
npm create vite@latest blueline -- --template react
cd blueline
npm install
npm run dev
```

2. Move to TypeScript.

```Terminal
npm install -D typescript @types/react @types/react-dom
```

Add 3 config files to the blueline app folder for TypeScript. Edit them to include the proper configurations:

```
tsconfig.json 			(main config)
tsconfig.app.json 	(browser environment)
tsconfig.node.json 	(Node environment)
```

Rename the .jsx files to be .tsx files:

```
mv src/main.jsx src/main.tsx
mv src/App.jsx src/App.tsx
```

Update index.html (use tsx as opposed to jsx file extension) with /src/main.tsx that contains everything needed:

```
<script type="module" src="/src/main.tsx"></script> 
```

> [!NOTE] 
>
> Vite injects the React app into this shell. You almost never change this file except for global stuff (meta tags, favicon, analytics, etc).

3. Begin building the app.

**/src/main.tsx**: The file that is getting injected into index.html.

```
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

**/src/App.tsx**: The file that contains the entire structure of the web app. /src/App.css contains styling for everything

```
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**/src/pages/... .tsx**: The actual React components and pages. They get routed in the App.tsx file.

```
function Index() {
  return (
    <div>
      <h1>Index Page</h1>
    </div>
  );
}
export default Index;
```

4. Import and use Tailwind CSS. 

> [!NOTE]
>
> Tailwind CSS is a utility-first CSS framework. Works by composing utility class names as strings in elements’ `className` attribute. Eliminates the need for css files because you're just adding the styles in the HTML files. https://tailwindcss.com/docs/styling-with-utility-classes.

```
npm install -D tailwindcss postcss autoprefixer
```

Creates **`tailwind.config.js`** and **`postcss.config.js`** in your project root.

Edit tailwind.config.js and update the content array to include all files within src/ and your index.html:

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Replace the content of **/src/index.css**:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Make sure **/src/main.tsx** imports your CSS at the top:

```
import './index.css'
```