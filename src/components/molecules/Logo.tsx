import { x } from '@xstyled/styled-components'

interface LogoProps {
  light?: boolean
  white?: boolean
  iconOnly?: boolean
  width?: number
  height?: number
}

export default function Logo({
  light,
  white,
  iconOnly = false,
  width = 364,
  height = 126,
}: LogoProps) {
  const viewBox = iconOnly ? '0 0 85 126.4' : '0 0 364.7 126.4'
  return (
    <x.svg
      id="logo"
      h={`${height}px`}
      w={`${width}px`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
    >
      <title>luigi-derson-logo</title>
      <path
        id="luigi"
        d="M60,121.9a43.63,43.63,0,0,1-39.7-3.8A43.75,43.75,0,0,1,0,81.2V0H20.2V81.2a23.59,23.59,0,0,0,35.1,20.6Z"
        transform="translate(0 0)"
        fill={light ? '#818cf8' : '#140a82'}
      />
      <path
        id="derson"
        d="M87.7,0V125H67.4V81.2A23.59,23.59,0,0,0,32.3,60.6L27.6,40.4a43.63,43.63,0,0,1,39.7,3.8V0Z"
        transform="translate(0 0)"
        fill={light ? '#f87171ff' : '#f50a14'}
      />
      {!iconOnly && (
        <g id="text" fill={white ? '#fff' : '#000'}>
          <path
            d="M118.3,44.7a3.1,3.1,0,0,0,1.3,2.7,5,5,0,0,0,3.2,1.1,15.73,15.73,0,0,0,4.9-1.1l1.8,8.7a20.75,20.75,0,0,1-8.5,2.1,12.34,12.34,0,0,1-13-12.9V.6h10.4V44.7Z"
            transform="translate(0 0)"
          />
          <path
            d="M173.1,57.1H162.7V53.6c-3.1,3.1-7.2,4.7-12.3,4.7A15.21,15.21,0,0,1,139,53.7c-2.9-3.1-4.3-7-4.3-11.9V17.9H145V39.6a9.84,9.84,0,0,0,2.2,6.7,7.26,7.26,0,0,0,5.7,2.5c6.5,0,9.7-4.5,9.7-13.5V17.9H173V57.1Z"
            transform="translate(0 0)"
          />
          <path
            d="M194.3,1.8a6.2,6.2,0,0,1,1.8,4.4,5.82,5.82,0,0,1-1.8,4.3,6.81,6.81,0,0,1-9,0,5.82,5.82,0,0,1-1.8-4.3,6.38,6.38,0,0,1,1.8-4.4,6.53,6.53,0,0,1,9,0Zm-9.7,55.3V17.9H195V57.1Z"
            transform="translate(0 0)"
          />
          <path
            d="M244.7,53.3q0,8.85-5.7,13.8c-3.8,3.2-8.9,4.9-15.3,4.9-9.1,0-15.5-2.9-19.1-8.6L213,57a18.77,18.77,0,0,0,4.7,4.4,11.61,11.61,0,0,0,6,1.3c3.4,0,6-.9,8-2.9s2.9-4.6,2.9-8v-.6q-4.5,3.6-12.3,3.6A18.8,18.8,0,0,1,209,49.2a18.13,18.13,0,0,1-5.7-13.5A17.92,17.92,0,0,1,209,22.3a18.36,18.36,0,0,1,13.3-5.5c5.1,0,9.3,1.2,12.3,3.6V18h10ZM231.6,42.9a9.31,9.31,0,0,0,3.1-7.3,9.67,9.67,0,0,0-3.1-7.4,10.69,10.69,0,0,0-7.4-2.8,11.16,11.16,0,0,0-7.8,2.8,9.38,9.38,0,0,0-3.1,7.4,9.38,9.38,0,0,0,3.1,7.4,10.83,10.83,0,0,0,7.8,2.8A10.51,10.51,0,0,0,231.6,42.9Z"
            transform="translate(0 0)"
          />
          <path
            d="M265.9,1.8a6.2,6.2,0,0,1,1.8,4.4,5.82,5.82,0,0,1-1.8,4.3,6.81,6.81,0,0,1-9,0,5.82,5.82,0,0,1-1.8-4.3,6.38,6.38,0,0,1,1.8-4.4A6.11,6.11,0,0,1,261.4,0,6,6,0,0,1,265.9,1.8Zm-9.6,55.3V17.9h10.4V57.1Z"
            transform="translate(0 0)"
          />
          <path
            d="M150.6,125H140.2v-3a20,20,0,0,1-12.9,4.2,18.27,18.27,0,0,1-13.5-5.9,20.45,20.45,0,0,1-5.7-14.8,20.76,20.76,0,0,1,5.8-14.9,18.22,18.22,0,0,1,13.4-5.9c5.2,0,9.5,1.4,12.9,4.3V68.5h10.4Zm-13.7-11.1a10.79,10.79,0,0,0,3.4-8.4,11.15,11.15,0,0,0-3.4-8.5,11,11,0,0,0-7.8-3.3,10.32,10.32,0,0,0-7.8,3.2c-2.1,2.1-3.1,5-3.1,8.6a11.56,11.56,0,0,0,3.1,8.5,10.32,10.32,0,0,0,7.8,3.2A11,11,0,0,0,136.9,113.9Z"
            transform="translate(0 0)"
          />
          <path
            d="M198.6,108.2H168.8a11.8,11.8,0,0,0,3.5,6.6,9.1,9.1,0,0,0,6.3,2.5c4.5,0,7.7-1.7,9.7-5.2l9.3,2a18.16,18.16,0,0,1-7.5,9,21.72,21.72,0,0,1-11.5,3.1,19.86,19.86,0,0,1-14.3-5.8,20.43,20.43,0,0,1-5.8-14.9,20.51,20.51,0,0,1,5.9-15,19.6,19.6,0,0,1,14.4-5.8,19.27,19.27,0,0,1,13.8,5.6,20.58,20.58,0,0,1,6,14.4v3.5ZM172.8,95.6a9.1,9.1,0,0,0-3.7,5.3H188a9,9,0,0,0-3.5-5.4,9.53,9.53,0,0,0-5.8-1.8A9.88,9.88,0,0,0,172.8,95.6Z"
            transform="translate(0 0)"
          />
          <path
            d="M233.6,85.6l-.5,10h-2.3c-9.3,0-14,5.6-14,16.8V125H206.4V85.9h10.4V93c3.5-5.1,8.2-7.7,14-7.7A10.36,10.36,0,0,1,233.6,85.6Z"
            transform="translate(0 0)"
          />
          <path
            d="M246.8,112.6c.5,3.5,3.1,5.3,8.1,5.3a8.31,8.31,0,0,0,4.5-1.1A3.11,3.11,0,0,0,261,114c0-1.7-1.4-2.9-4.3-3.5l-8-1.6a15.12,15.12,0,0,1-8.2-4,9.51,9.51,0,0,1-2.9-7.1,11.56,11.56,0,0,1,4.4-9.3c2.9-2.4,6.7-3.6,11.6-3.6a20,20,0,0,1,11.5,3.2,12.77,12.77,0,0,1,5.6,8.4l-9.9,2a5.36,5.36,0,0,0-2.3-3.9,8.44,8.44,0,0,0-5.2-1.5,6.48,6.48,0,0,0-4.1,1.1,3.49,3.49,0,0,0-1.3,2.7c0,1.6,1.2,2.7,3.5,3.3l9.3,2a13.56,13.56,0,0,1,7.7,4,10.53,10.53,0,0,1,2.6,7.1,11.42,11.42,0,0,1-4.6,9.7c-3.1,2.3-7.3,3.4-12.6,3.4a22.59,22.59,0,0,1-11.9-2.9,10.78,10.78,0,0,1-5.6-8.6Z"
            transform="translate(0 0)"
          />
          <path
            d="M312.4,90.7c4.1,3.8,6.1,8.8,6.1,14.8a19.46,19.46,0,0,1-6.1,14.8,22.43,22.43,0,0,1-30.1,0c-4.2-3.8-6.2-8.7-6.2-14.8s2-11,6.2-14.8A21.67,21.67,0,0,1,297.4,85,20.73,20.73,0,0,1,312.4,90.7Zm-7.3,23.2a10.79,10.79,0,0,0,3.4-8.4,11.28,11.28,0,0,0-11.1-11.7,11.44,11.44,0,0,0-11.3,11.7,11.08,11.08,0,0,0,3.5,8.5,11.32,11.32,0,0,0,7.8,3.2A10.77,10.77,0,0,0,305.1,113.9Z"
            transform="translate(0 0)"
          />
          <path
            d="M360.4,89.2a16.75,16.75,0,0,1,4.3,11.9V125H354.3V103.3a10.33,10.33,0,0,0-2.1-6.7,7.62,7.62,0,0,0-5.8-2.5c-6.5,0-9.7,4.5-9.7,13.5V125H326.3V85.9h10.4v3.5c3.1-3.1,7.2-4.7,12.3-4.7A15.14,15.14,0,0,1,360.4,89.2Z"
            transform="translate(0 0)"
          />
        </g>
      )}
    </x.svg>
  )
}
