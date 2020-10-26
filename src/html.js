import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script src="//code-ya.jivosite.com/widget/JPf4ILfWPy" async></script>
        <script src="https://static.cdn-apple.com/businesschat/start-chat-button/2/index.js"></script>
        <div class="apple-business-chat-banner-container contacts__button" 
        data-apple-business-id="26de39d6-f978-4f56-853e-915d189b2876" 
        data-apple-business-phone="+12163954902"
        data-apple-banner-cta="Questions? We can help." 
        data-apple-banner-context="Tap to chat with our support now" 
        data-apple-banner-orientation="vertical" 
        data-apple-banner-rounded-corners="false" 
        data-apple-icon-color="#fff" 
        data-apple-icon-background-color="rgb(255, 255, 255)"
        data-apple-banner-background-color="rgb(20, 24, 33)" 
        data-apple-banner-text-color="rgb(255, 255, 255)" 
        data-apple-banner-icon-background-color="rgb(68, 187, 110)" 
        data-apple-banner-icon-color="rgba(255, 255, 255, 255)" 
        data-apple-banner-scale="1"
        ></div>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
