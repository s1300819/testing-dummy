jQuery(document).ready(function($) {
	"use strict";

	var body    = $( 'body' ),
	_window = $( window );
	var window_width = _window.width();
	var $content = $('#content');
	var $navWrap = $('#nav-wrapper');
	var $siteHeader = $('.site-header');
	var $primaryNav = $('.site-navigation');
	var $footer = $('#footer');
	var $footer_menu = $('#footer-menu');
	var headerLayout = $siteHeader.hasClass('layout-1') ? 'layout-1' : 'layout-2';
	var headerStyle = $siteHeader.hasClass('fixed-header') ? 'fixed' : false;
	var headerShrink = $siteHeader.hasClass('shrinkable') ? true : false;
	var mobileMenuVisibility = MyAjax.breakpoint;
	var isRetina = (
		window.devicePixelRatio > 1 || (window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches)
	);
	
	
	var indexOfMainNumber = 0; 

jQuery(document).ready(function ($) {
    $.fn.qtip.styles.orangered = {
        width: 195,
        padding: 25,
        background: '#ed8b00',
        color: '#feffff',
        tip: true,
        border: {
            width: 0,
            color: '#ed8b00'
        }
    }
});

/**
 * Override parent theme methods
 */
function addTooltipText(tooltipElement, tooltipText) {
    tooltipElement.qtip({
        content: '<p class="tooltip-text">' + tooltipText + '</p>',
        //hide: false,
        position: {
            corner: {
                target: 'leftMiddle',
                tooltip: 'rightMiddle'
            }
        },
        style: {
            name: 'orangered'
        }
    });
}
});