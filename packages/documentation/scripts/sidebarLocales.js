// @ts-check
/**
 * Sidebar localization data for documentation navigation.
 * 
 * To add a new language:
 * 1. Add a new key (e.g., "ja", "ko") to sidebarLocales
 * 2. Translate the titles and summaries
 * 3. Run: pnpm run --filter=documentation create-handbook-nav
 * 
 * Note: The `id` generation always uses the English title to keep anchors/URLs stable.
 * Only display text (title/summary) should be translated here.
 */

/** @type {Record<string, Record<string, { title?: string, summary?: string }>>} */
const sidebarLocales = {
  zh: {
    // ============================================
    // Section titles and summaries (顶级章节)
    // ============================================
    "Get Started": { 
      title: "快速开始", 
      summary: "根据你的背景或偏好快速入门。" 
    },
    "Handbook": { 
      title: "手册", 
      summary: "日常 TypeScript 工作的绝佳入门读物。" 
    },
    "Reference": { 
      title: "参考", 
      summary: "深入的参考资料。" 
    },
    "Modules Reference": { 
      title: "模块参考", 
      summary: "TypeScript 如何处理 JavaScript 模块。" 
    },
    "Tutorials": { 
      title: "教程", 
      summary: "在各种环境中使用 TypeScript。" 
    },
    "What's New": { 
      title: "新增功能", 
      summary: "了解 TypeScript 的发展历程和各版本的新增功能。" 
    },
    "Declaration Files": { 
      title: "声明文件", 
      summary: "学习如何编写声明文件来描述现有的 JavaScript。对 DefinitelyTyped 贡献很重要。" 
    },
    "JavaScript": { 
      title: "JavaScript", 
      summary: "如何使用 TypeScript 驱动的 JavaScript 工具。" 
    },
    "Project Configuration": { 
      title: "项目配置", 
      summary: "编译器配置参考。" 
    },

    // ============================================
    // Sub-section titles (子章节，非文件引用)
    // ============================================
    "Type Manipulation": { title: "类型操作" },
    "Guides": { title: "指南" },
    "Appendices": { title: "附录" },
    ".d.ts Templates": { title: ".d.ts 模板" },

    // ============================================
    // Special link items (特殊链接)
    // ============================================
    "Cheat Sheets": { 
      title: "速查表", 
      summary: "常见代码的语法概览" 
    },
    "TSConfig Reference": { 
      title: "TSConfig 参考", 
      summary: "涵盖所有 TSConfig 选项的页面" 
    },

    // ============================================
    // Modules Reference sub-items (模块参考子项)
    // ============================================
    "Introduction": { title: "简介" },
    "Theory": { title: "理论" },
    "Choosing Compiler Options": { title: "选择编译器选项" },
    // Note: "Reference" is already defined above (used for both section and sub-item)
  },

  // ============================================
  // Add more languages here, e.g.:
  // ============================================
  // ja: {
  //   "Get Started": { title: "はじめに", summary: "..." },
  //   ...
  // },
};

module.exports = { sidebarLocales };
