/**
 * Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {
	wp.customize( 'sfb_background_color', function( value ) {
		value.bind( function( to ) {
			$( '.sfb-footer-bar' ).css( 'background-color', to );
		} );
	} );

	wp.customize( 'sfb_text_color', function( value ) {
		value.bind( function( to ) {
			$( '.sfb-footer-bar .widget' ).css( 'color', to );
		} );
	} );

	wp.customize( 'sfb_heading_color', function( value ) {
		value.bind( function( to ) {
			$( '.sfb-footer-bar .widget h1, .sfb-footer-bar .widget h2, .sfb-footer-bar .widget h3, .sfb-footer-bar .widget h4, .sfb-footer-bar .widget h5, .sfb-footer-bar .widget h6' ).css( 'color', to );
		} );
	} );
} )( jQuery );
