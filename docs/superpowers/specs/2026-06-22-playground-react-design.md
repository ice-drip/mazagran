# Playground React 重构设计文档

**日期**: 2026-06-22
**版本**: 1.0
**状态**: 已批准

## 概述

将 `@mazagran/playground` 从 Angular 19 重构为 Rsbuild + React 应用，使用 shadcn/ui + Tailwind CSS 构建现代化 UI。

## 目标

1. **技术栈迁移**：Angular → React + Rsbuild
2. **UI 升级**：Angular Material → shadcn/ui + Tailwind CSS
3. **新功能**：国际化切换、强度评分展示、自定义规则演示、主题切换

## 设计方案

采用**方案 A：全新创建**，删除旧的 Angular 项目，使用 Rsbuild 脚手架创建新项目。

---

## 1. 项目结构

```
packages/playground/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui 组件
│   │   ├── PasswordInput.tsx
│   │   ├── StrengthMeter.tsx
│   │   ├── RuleList.tsx
│   │   ├── AdvancedOptions.tsx
│   │   ├── CustomRuleForm.tsx
│   │   ├── LocaleSwitch.tsx
│   │   └── ThemeSwitch.tsx
│   ├── atoms/               # Jotai 状态
│   │   ├── password.ts
│   │   ├── config.ts
│   │   ├── locale.ts
│   │   └── theme.ts
│   ├── hooks/
│   │   ├── useMazagran.ts
│   │   └── useTheme.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── components.json
├── rsbuild.config.ts
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
└── package.json
```

---

## 2. 组件设计

### 2.1 图标方案

使用 `@iconify/tailwind` 插件，通过 CSS 类名引入图标：

```tsx
<span className="icon-[lucide--check-circle] w-4 h-4 text-green-500" />
<span className="icon-[lucide--x-circle] w-4 h-4 text-red-500" />
```

### 2.2 主应用组件

```tsx
export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background">
        <header className="flex justify-between p-4">
          <LocaleSwitch />
          <ThemeSwitch />
        </header>
        <main className="max-w-md mx-auto p-6">
          <PasswordInput />
          <StrengthMeter />
          <AdvancedOptions />
          <CustomRuleForm />
          <RuleList />
        </main>
      </div>
    </ThemeProvider>
  );
}
```

### 2.3 强度评分展示

```tsx
export function StrengthMeter() {
  const { score, level } = useMazagran();
  
  const levelColors = {
    weak: 'bg-red-500',
    fair: 'bg-orange-500',
    good: 'bg-yellow-500',
    strong: 'bg-green-500'
  };
  
  return (
    <div className="space-y-2 mt-4">
      <div className="flex justify-between">
        <span>强度评分</span>
        <span className="font-bold">{score}/100</span>
      </div>
      <Progress value={score} className={levelColors[level]} />
      <Badge variant="outline">{level}</Badge>
    </div>
  );
}
```

---

## 3. 状态管理（Jotai）

### 3.1 状态原子

- `passwordAtom` - 密码输入
- `checksAtom` - 启用的检查规则
- `configAtom` - 配置参数
- `advancedModeAtom` - 高级模式开关
- `customRulesAtom` - 自定义规则列表
- `localeAtom` - 语言设置
- `themeAtom` - 主题设置

### 3.2 useMazagran Hook

```tsx
export function useMazagran() {
  const password = useAtomValue(passwordAtom);
  const checks = useAtomValue(checksAtom);
  const config = useAtomValue(configAtom);
  const locale = useAtomValue(localeAtom);
  const customRules = useAtomValue(customRulesAtom);

  const mazagran = useMemo(() => {
    const instance = new Mazagran({
      checks, ...config, locale,
      score: { enabled: true }
    });
    customRules.forEach(rule => instance.registerRule(rule));
    return instance;
  }, [checks, config, locale, customRules]);

  const result = useMemo(() => {
    if (!password) return null;
    return mazagran.checkAll(password);
  }, [mazagran, password]);

  return {
    errors: result?.errors ?? [],
    passes: result?.passes ?? [],
    messages: result?.messages ?? {},
    score: result?.score ?? 0,
    level: result?.level ?? 'weak'
  };
}
```

---

## 4. Rsbuild 配置

```tsx
// rsbuild.config.ts
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: { template: './index.html' },
  source: { alias: { '@': './src' } }
});
```

---

## 5. 自定义规则演示

提供可视化界面添加自定义验证规则：
- 输入规则类型、错误键名、正则表达式、权重
- 实时预览规则效果
- 支持删除已添加的规则

---

## 6. 测试与部署

- 使用 Rsbuild 内置测试
- 构建输出为静态站点
- 集成到 pnpm workspace

---

## 7. 依赖清单

### 运行时
- `@kaffee/mazagran`, `jotai`, `react`, `react-dom`

### 开发
- `@iconify/tailwind`, `@rsbuild/core`, `@rsbuild/plugin-react`
- `tailwindcss`, `typescript`, `postcss`, `autoprefixer`
