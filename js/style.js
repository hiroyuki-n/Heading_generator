
const wrap = '.Heading01'
function Heading01() {
    const width = $(wrap).find('.width').val();
    const font_size = $(wrap).find('.font_size').val();
    const margin = $(wrap).find('.margin').val();
    const line_weight = $(wrap).find('.line_weight').val();
    const letter_spacing = $(wrap).find('.letter_spacing').val();
    const font_weight = $(wrap).find('.font_weight').val();
    const color = $(wrap).find('.color').val();
    const line_color = $(wrap).find('.line_color').val();
    const line_radius = $(wrap).find('.line_radius').val();

    $(wrap).find('.Heading_txt').css('width', width);
    $(wrap).find('.Heading_txt').css('font-size', font_size + 'px');

    $(wrap).find('.Heading_txt span').eq(1).css('margin-right', margin + 'em');
    $(wrap).find('.Heading_txt span').eq(1).css('margin-left', margin + 'em');

    $(wrap).find('.Heading_txt span').eq(0).css('height', line_weight + 'px');
    $(wrap).find('.Heading_txt span').eq(2).css('height', line_weight + 'px');
    $(wrap).find('.Heading_txt').css('letter-spacing', letter_spacing + 'em');
    $(wrap).find('.Heading_txt span').eq(1).css('padding-left', letter_spacing + 'em');
    $(wrap).find('.Heading_txt').css('font-weight', font_weight);
    $(wrap).find('.Heading_txt').css('color', color);
    $(wrap).find('.Heading_txt span').eq(0).css('background-color', line_color);
    $(wrap).find('.Heading_txt span').eq(2).css('background-color', line_color);
    $(wrap).find('.Heading_txt span').eq(0).css('border-radius', line_radius + 'em');
    $(wrap).find('.Heading_txt span').eq(2).css('border-radius', line_radius + 'em');


    $(wrap).find('.value_width').text(width);
    $(wrap).find('.value_font_size').text(font_size);
    $(wrap).find('.value_margin').text(margin);
    $(wrap).find('.value_line_weight').text(line_weight);
    $(wrap).find('.value_letter_spacing').text(letter_spacing);
    $(wrap).find('.value_font_weight').text(font_weight);
    $(wrap).find('.value_color').text(color);
    $(wrap).find('.value_line_color').text(line_color);
    $(wrap).find('.value_line_radius').text(line_radius);


}
//ラジオボタン
$(wrap).find('.align_items').on('input', function (event) {
    const align_items = $(wrap).find('input:radio:checked').val();
    $(wrap).find('.Heading_txt').css('align-items', align_items);
    $(wrap).find('.value_align_items').text(align_items);

});
//テキスト変更
$(wrap).find('.heading_input').on('input', function (event) {
    $(wrap).find('.value_heading').text($(wrap).find('.heading_input').val());
});
