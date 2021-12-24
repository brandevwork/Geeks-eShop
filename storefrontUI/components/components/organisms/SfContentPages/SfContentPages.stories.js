import { SfContentPages, SfTabs } from "@storefront-ui/vue";
const pages = [
  {
    title: "About us",
    tabs: [
      {
        title: "Security",
        content:
          "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
      },
      {
        title: "Privacy Policy",
        content:
          "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
      },
      {
        title: "Additional Information",
        content:
          "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
      },
    ],
  },
  {
    title: "Customer service",
    tabs: [
      {
        title: "Size guide",
        content:
          "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
      },
      {
        title: "Where's my order?",
        content:
          "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
      },
    ],
  },
  {
    title: "Store locator",
    content:
      "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
  },
];
export default {
  title: "Components/Organisms/ContentPages",
  component: SfContentPages,
  argTypes: {
    title: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
    },
    active: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    "click:change": { action: "Page changed", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfContentPages, SfTabs },
  props: Object.keys(argTypes),
  template: `
  <SfContentPages
    :title="title"
    :active="active"
    @click:change="(active) => { this['click:change'](active); this.active = active }"
  >
  <SfContentPage v-for="(page, key) in pages" :key="page.title+key" :title="page.title">
    <SfTabs v-if="page.tabs" :open-tab="1">
      <SfTab v-for="(tab, key) in page.tabs" :key="tab.title+key" :title="tab.title">{{tab.content}}</SfTab>
    </SfTabs>
    <p v-else :style="{padding: '1rem'}">{{page.content}}</p>
  </SfContentPage>
  </SfContentPages>`,
});

export const Common = Template.bind({});
Common.args = {
  title: "Help",
  pages,
};

export const HasActive = Template.bind({});
HasActive.args = {
  ...Common.args,
  active: "About us",
};

export const WithCategories = (args, { argTypes }) => ({
  components: { SfContentPages, SfTabs },
  props: Object.keys(argTypes),
  template: `
  <SfContentPages
    :title="title"
    :active="active"
    @click:change="(active) => { this['click:change'](active); this.active = active }"
  >
  <SfContentPage v-for="(page, key) in pages" :key="page.title+key" :title="page.title">
    <SfTabs v-if="page.tabs" :open-tab="1">
      <SfTab v-for="(tab, key) in page.tabs" :key="tab.title+key" :title="tab.title">{{tab.content}}</SfTab>
    </SfTabs>
    <p v-else :style="{padding: '1rem'}">{{page.content}}</p>
  </SfContentPage>
  </SfContentPages>`,
});
WithCategories.args = {
  ...Common.args,
  categories: [{ pages, title: "Personal Details" }],
};

export const WithCategoryIcon = (args, { argTypes }) => ({
  components: { SfContentPages, SfTabs },
  props: Object.keys(argTypes),
  template: `
  <SfContentPages
    :title="title"
    :active="active"
    @click:change="(active) => { this['click:change'](active); this.active = active }"
  >
    <SfContentPage v-for="(page, key) in pages" :key="page.title+key" :title="page.title" :icon="page.icon">
    <SfTabs v-if="page.tabs" :open-tab="1">
      <SfTab v-for="(tab, key) in page.tabs" :key="tab.title+key" :title="tab.title">{{tab.content}}</SfTab>
    </SfTabs>
    <p v-else :style="{padding: '1.25rem 0'}">{{page.content}}}}</p>
    </SfContentPage>
  </SfContentPages>`,
});
WithCategoryIcon.args = {
  ...Common.args,
  pages: [
    {
      title: "About us",
      icon: "clock",
      tabs: [
        {
          title: "Security",
          content:
            "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
        },
        {
          title: "Privacy Policy",
          content:
            "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
        },
        {
          title: "Additional Information",
          content:
            "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
        },
      ],
    },
    {
      title: "Customer service",
      icon: "heart",
      tabs: [
        {
          title: "Size guide",
          content:
            "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
        },
        {
          title: "Where's my order?",
          content:
            "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
        },
      ],
    },
    {
      title: "Store locator",
      icon: "home",
      content:
        "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
    },
  ],
};

export const UseMenuItemSlot = (args, { argTypes }) => ({
  components: { SfContentPages, SfTabs },
  props: Object.keys(argTypes),
  template: `
  <SfContentPages
    :title="title"
    :active="active"
    @click:change="(active) => { this['click:change'](active); this.active = active }"
  >
  <template #menu-item="{ updatePage, page, active }">
    <button @click="updatePage(page.title)">{{page.title}}</button>
  </template>
  <SfContentPage v-for="(page, key) in pages" :key="page.title+key" :title="page.title">
    <SfTabs v-if="page.tabs" :open-tab="1">
      <SfTab v-for="(tab, key) in page.tabs" :key="tab.title+key" :title="tab.title">{{tab.content}}</SfTab>
    </SfTabs>
    <p v-else :style="{padding: '1rem'}">{{page.content}}</p>
  </SfContentPage>
  </SfContentPages>`,
});
UseMenuItemSlot.args = { ...Common.args };
