import type { TinaField } from "tinacms";
export function aboutFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "image",
      name: "main_image",
      label: "Main Image",
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "quote_text",
      label: "Quote text",
    },
    {
      type: "string",
      name: "quote_by",
      label: "Quote By",
    },
  ] as TinaField[];
}
export function contactFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "phone",
      label: "Phone",
      fields: [
        {
          type: "string",
          name: "phone_number",
          label: "Phone Number",
        },
        {
          type: "number",
          name: "phone_number_formated",
          label: "Phone Number Formated",
        },
      ],
    },
    {
      type: "string",
      name: "email",
      label: "Email",
    },
    {
      type: "string",
      name: "careers_title",
      label: "Careers Title",
    },
    {
      type: "string",
      name: "careers_text",
      label: "Careers Text",
    },
    {
      type: "string",
      name: "careers_email",
      label: "Careers Email",
    },
    {
      type: "string",
      name: "open_hours_days",
      label: "Open Hours Days",
    },
    {
      type: "string",
      name: "open_hours_time",
      label: "Open Hours Time",
    },
  ] as TinaField[];
}
export function galleryFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "image",
      name: "gallery_images",
      label: "Gallery Images",
      list: true,
    },
  ] as TinaField[];
}
export function indexFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
  ] as TinaField[];
}
export function learn_templateFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "image",
      name: "cover_image",
      label: "Cover Image",
    },
    {
      type: "datetime",
      name: "posted_on",
      label: "Posted On",
      required: true,
      ui: {
        component: () => null
      }
    },
  ] as TinaField[];
}
export function learnFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    
  ] as TinaField[];
}
export function menuFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "menu_sections",
      label: "Menu_sections",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.section_title} `}
        },
      },
      fields: [
        {
          type: "string",
          name: "section_title",
          label: "Title",
        },
        {
          type: "image",
          name: "section_image",
          label: "Image",
        },
        {
          type: "string",
          name: "section_text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "section_button_text",
          label: "Button Text",
        },
        {
          type: "string",
          name: "section_menu_url",
          label: "Menu URL",
        },
        {
          type: "image",
          name: "menu_file",
          label: "Menu File",
        },
      ],
    },
  ] as TinaField[];
}
export function news___events_templateFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "image",
      name: "cover_image",
      label: "Cover image",
    },
    {
      type: "datetime",
      name: "posted_on",
      label: "Posted On",
      required: true,
      ui: {
        component: () => null
      }
    },
  ] as TinaField[];
}
export function newsFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
  ] as TinaField[];
}


export function omakaseFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
      ui: {
        component: () => null
      }
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "price",
      label: "Price",
    },
    {
      type: "rich-text",
      name: "main_text",
      label: "Main text",
    },
    {
      type: "object",
      name: "beverage_pairing",
      label: "Beverage Pairing",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title} - ${item?.price} `}
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "price",
          label: "Price",
        },
      ],
    },
    {
      type: "string",
      name: "availability",
      label: "Availability",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "terms_title",
      label: "Terms & Conditions Title",
    },
    {
      type: "string",
      name: "terms_text",
      label: "Terms & Conditions Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "button_text",
      label: "Button text",
    },
    {
      type: "string",
      name: "button_link",
      label: "Button link",
    },
    {
      type: "string",
      name: "terms_btn_text",
      label: "T&C button text",
    },
    {
      type: "string",
      name: "terms_btn_link",
      label: "T&C button link",
    },
  ] as TinaField[];
}