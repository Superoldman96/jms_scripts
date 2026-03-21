// OS4シャトル @502010000
var status = -1;
function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	switch (status) {
		case 0:
			{
				// VisitorleaveDirectionMode?
				var text = "どこへ出発しますか？\r\n";
				// 堕落した宇宙船の深海
				text += "#L" + 502010200 + "##b深海に移動する#k#l\r\n";
				// 化石鉱物の鉱山
				text += "#L" + 502010300 + "##b鉱山に移動する#k#l\r\n";
				// 加工工場輸送路
				text += "#L" + 502010400 + "##b加工工場に輸送する#k#l\r\n";
				// 加工工場防御船
				text += "#L" + 502010500 + "##b加工工場の防御船に移動する#k#l\r\n";
				cm.sendSimple(text);
				return;
			}
		case 1:
			{
				if (selection == 502010500) {
					cm.sendOk("入場禁止");
					break;
				}
				cm.warp(selection, "sp");
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
