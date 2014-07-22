$(function() {

    // Accordion Item (custom module)
    $('.accordion-header').on('click', function() {
        var accordionGroupName = $(this).closest('.accordion-container').attr('data-accordion-name');
        var accordionGroupSelector = $('.accordion-container[data-accordion-name="' + accordionGroupName + '"]');
        accordionGroupSelector.find('.accordion-body').slideUp();
        accordionGroupSelector.find('.accordion-header.expanded').removeClass('expanded');
        if ( $(this).next('.accordion-body').is(':hidden') ) {
            $(this).addClass('expanded').next('.accordion-body').stop(true,true).slideDown();
        }
        else $(this).removeClass('expanded').next('.accordion-body').slideUp();
        return false;
    });
});
