import React from "react";
import { twMerge } from "tailwind-merge";

export default function Button({ children, link, className, ...rest }) {
  const Component = link ? "a" : "button";

  const commonStyles = twMerge`
    px-4 py-2 
    rounded 
    text-white 
    ${link ? "bg-blue-500" : "bg-gray-500"}
  `;

  const mergedClassName = twMerge(commonStyles, className);

  // if (link && !rest.href) {
  //   console.error(
  //     "Button component: 'link' prop is provided but 'href' prop is missing. Please provide 'href' for links."
  //   );
  // }

  // if (rest.href && !link) {
  //   console.error(
  //     "Button component: 'href' prop is provided but 'link' prop is missing. Please set 'link' to true for links."
  //   );
  // }

  return (
    <Component
      {...(link && { href: link })}
      className={mergedClassName}
      {...rest}
    >
      {children}
    </Component>
  );
}
