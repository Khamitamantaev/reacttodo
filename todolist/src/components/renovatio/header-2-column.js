import React from 'react';

import "./css/main.css";

const Header2 = props => (
<div>
<div class="left_running_title margin_top_10">
<p>{props.name}</p>

<p>{props.adress}</p>

<p>{props.ogrn}</p>
</div>

<div class="right_running_title margin_top_10">
<p class="text-right">{props.tel}</p>

<p class="text-right">{props.sait}</p>

<p class="text-right">{props.email}</p>
</div>

<div class="clear">&nbsp;</div>
</div>

)


export default Header2;









