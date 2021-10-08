import 'package:flutter/material.dart';

const LISTA_COLORES = [
  [Color(0xFFEC407A), Color(0xFFE91E63)],
  [Color(0xFFFFEE58), Color(0xFFFFEB3B)]
];

class ColorProvider extends ChangeNotifier {
  List<Color> colorSelect = LISTA_COLORES.first;
  changeColors(int index) {
    colorSelect = LISTA_COLORES[index];
    notifyListeners();
  }
}
