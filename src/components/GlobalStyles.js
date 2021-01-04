import { createGlobalStyle } from 'styled-components'

// reboot based on https://github.com/twbs/bootstrap/blob/main/scss/_reboot.scss

const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

body,
html,
#root {
  height: 100%;
}

body {
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.base};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.fg};
  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: ${({ theme }) => theme.lineHeights.base};
  transition: color 0.35s linear, background 0.35s ease-in-out;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

[tabindex="-1"]:focus:not(:focus-visible) {
  outline: 0 !important;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}


p {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol,
ul {
  padding-left: 2rem;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dd {
  margin-bottom: .5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: 700;
}

a {
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
}

a:not([href]):not([class]) {
  &,
  &:hover {
    color: inherit;
    text-decoration: none;
  }
}

pre,
code,
kbd,
samp {
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1mm;
  unicode-bidi: bidi-override;
}

figure {
  margin: 0 0 1rem;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  // Account for some code outputs that place code tags in pre tags
  code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
  }
}

code {
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.green};
  word-wrap: break-word;

  // Streamline the style when inside anchors to avoid broken underline and more
  a > & {
    color: inherit;
  }
}


img,
svg {
  vertical-align: middle;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus {
  outline: dotted 1px;
  outline: -webkit-focus-ring-color auto 5px;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role="button"] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}

[list]::-webkit-calendar-picker-indicator {
  display: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
  &:not(:disabled) {
    cursor: pointer;
  }
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: $legend-margin-bottom;
  @include font-size($legend-font-size);
  font-weight: $legend-font-weight;
  line-height: inherit;

  + * {
    clear: left;
  }
}

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

output {
  display: inline-block;
}

progress {
  vertical-align: baseline;
}

summary {
  display: list-item;
  cursor: pointer;
}

iframe {
  border: 0;
}

[hidden] {
  display: none !important;
}

/* Set system default dark theme configuration */
@media (prefers-color-scheme: dark) {
  body {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  a {
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
}
}

`

export default GlobalStyles
