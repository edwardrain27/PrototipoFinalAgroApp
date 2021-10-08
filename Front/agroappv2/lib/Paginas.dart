import 'package:agroappv2/Ui/ColorProvider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'Ui/CardVista.dart';
import 'Ux/Category.dart';

class Paginas extends StatefulWidget {
  @override
  _PaginasState createState() => _PaginasState();
}

class _PaginasState extends State<Paginas> {
  int _currentPage = 0;
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: MediaQuery.of(context).size.height * 0.50,
      width: MediaQuery.of(context).size.width,
      child: PageView.builder(
        controller: PageController(viewportFraction: 0.8),
        itemCount: categoryList.length,
        itemBuilder: (context, index) {
          return AnimatedPadding(
            padding: _currentPage == index
                ? EdgeInsets.all(0)
                : EdgeInsets.symmetric(vertical: 40),
            duration: Duration(milliseconds: 200),
            child: CardVista(
              category: categoryList[index],
            ),
          );
        },
        onPageChanged: (newPage) {
          setState(() {
            _currentPage = newPage;
          });
          Provider.of<ColorProvider>(context, listen: false)
              .changeColors(newPage);
        },
      ),
    );
  }
}
