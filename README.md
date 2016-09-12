# node-sass-example
example to show unexpected result with node-sass output style expandend

*Current output*
output style expanded
`
.button-left:after,
.button-right:after,
.button-plus:after,
.button-min:after, .ask-a-question-banner a:after {
  text-indent: -999em;
}
`

*Expected output*
`
.button-plus:after,
.button-min:after, 
.ask-a-question-banner a:after {
  text-indent: -999em;
}
`
*Source*
`
// button.scss
.button-left,
.button-right,
.button-plus,
.button-min {
    &:after {
        @include sprite-arrow();
    }
}

// banner.scss
.ask-a-question-banner {
    &:after {
        @include sprite-arrow();
    }
}

// mixins.scss
 @mixin sprite-arrow() {
 	@extend %hidden-text;
 }
 
 //mixins.scss 
  %hidden-text {
 	text-indent: -999em;
 }
 `
