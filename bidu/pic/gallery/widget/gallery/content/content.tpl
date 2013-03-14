{%widget%}
<div id="gallery-wrapper">
    {%widget name="nav"%}

    <!--[if !IE]><!-->
    {%if $picture_show_total>0%}
        {%widget name="viewport"%}
        {%widget name="guide"%}
    {%else%}
        {%widget name="nopicture"%}
    {%/if%}
    <!--<![endif]-->

    <!--[if gte IE 8]>
    {%if $picture_show_total>0%}
        {%widget name="viewport"%}
        {%widget name="guide"%}
    {%else%}
        {%widget name="nopicture"%}
    {%/if%}
    <![endif]-->

    <!--[if lte IE 7]>
    {%widget name="lowbrowser"%}
    <![endif]-->

    {%widget name="footer%}
</div>
{%/widget%}