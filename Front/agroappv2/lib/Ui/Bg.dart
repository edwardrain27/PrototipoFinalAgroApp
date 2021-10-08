import 'package:agroappv2/Ui/ColorProvider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class Bg extends StatelessWidget {
  const Bg({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Consumer<ColorProvider>(builder: (context, colorProvider, __) {
      return AnimatedContainer(
        duration: Duration(milliseconds: 200),
        decoration: BoxDecoration(
            gradient: LinearGradient(
                colors: colorProvider.colorSelect,
                begin: Alignment.bottomLeft,
                end: Alignment.topRight)),
      );
    });
  }
}
