
function heading_text(wrap) {
    $(wrap).find('.value_heading').text($(wrap).find('.heading_input').val());
}
function width(wrap) {
    const val = $(wrap).find('.width').val();
    $(wrap).find('.Heading_txt').css('width', val);
    $(wrap).find('.value_width').text(val);
}
function font_size(wrap) {
    const val = $(wrap).find('.font_size').val();
    $(wrap).find('.Heading_txt').css('font-size', val + 'px');
    $(wrap).find('.value_font_size').text(val);
}
function font_weight(wrap) {
    const val = $(wrap).find('.font_weight').val();
    $(wrap).find('.Heading_txt').css('font-weight', val);
    $(wrap).find('.value_font_weight').text(val);
}



function Heading01() {


    const wrap = '.Heading01';

    heading_text(wrap);
    width(wrap);
    font_size(wrap);
    font_weight(wrap);


    const margin = $(wrap).find('.margin').val();

    const line_weight = $(wrap).find('.line_weight').val();
    const letter_spacing = $(wrap).find('.letter_spacing').val();
    const color = $(wrap).find('.color').val();
    const line_color = $(wrap).find('.line_color').val();
    const line_radius = $(wrap).find('.line_radius').val();

    $(wrap).find('.Heading_txt span').eq(1).css('margin-right', margin + 'em');
    $(wrap).find('.Heading_txt span').eq(1).css('margin-left', margin + 'em');
    $(wrap).find('.Heading_txt span').eq(0).css('height', line_weight + 'px');
    $(wrap).find('.Heading_txt span').eq(2).css('height', line_weight + 'px');
    $(wrap).find('.Heading_txt').css('letter-spacing', letter_spacing + 'em');
    $(wrap).find('.Heading_txt span').eq(1).css('padding-left', letter_spacing + 'em');
    $(wrap).find('.Heading_txt').css('color', color);
    $(wrap).find('.Heading_txt span').eq(0).css('background-color', line_color);
    $(wrap).find('.Heading_txt span').eq(2).css('background-color', line_color);
    $(wrap).find('.Heading_txt span').eq(0).css('border-radius', line_radius + 'px');
    $(wrap).find('.Heading_txt span').eq(2).css('border-radius', line_radius + 'px');


    $(wrap).find('.value_margin').text(margin);
    $(wrap).find('.value_line_weight').text(line_weight);
    $(wrap).find('.value_letter_spacing').text(letter_spacing);
    $(wrap).find('.value_color').text(color);
    $(wrap).find('.value_line_color').text(line_color);
    $(wrap).find('.value_line_radius').text(line_radius);






    const align_items = $(wrap).find('input:radio:checked').val();
    $(wrap).find('.Heading_txt').css('align-items', align_items);
    $(wrap).find('.value_align_items').text(align_items);




}