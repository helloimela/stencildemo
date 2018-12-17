
###-- Initiate Corporate from html file

Corporate UI modes, where auto is the deault one
<script src="corporate-ui.js"></script>

<script src="corporate-ui.js?component=default"></script>
  auto based on componetns available in the browser atm (lazy load)
<script src="corporate-ui.js?component=base"></script>
  the four base components: header, footer, content, navigation
<script src="corporate-ui.js?component=full"></script>
  all available components
<script src="corporate-ui.js?component=[cHeader,cFooter]"></script>

###-- Use Corporate components separately

import { cHeader } from CorporateUI

render(
  <div>
    <cHeader site-name="cool site"></cHeader>
  </div>
)

###-- Override default theme set in corporate (bootstrap) with scania theme
<link rel="stylesheet" href="scania.css">

import defineCustomElement from jadaja

export {
  CuiAlert : defineCustomElement(window, CuiAlert, opts),
  CuiContent : defineCustomElement(window, CuiContent, opts)
}
