import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:http/http.dart' as http;
import 'dart:async';
import 'dart:convert';
import 'Ui/Bg.dart';
import 'Ui/ColorProvider.dart';
import 'Paginas.dart';

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  getTrabajador() async {
    http.Response response =
        await http.get(Uri.parse('http://10.0.2.2:3000/api/trabajador'));
    debugPrint(response.body);
  }

  @override
  void initState() {
    super.initState();
    getTrabajador();
  }

  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => ColorProvider(),
      child: Scaffold(
        body: Stack(
          alignment: Alignment.center,
          children: <Widget>[
            Bg(),
            Positioned(
                top: 40,
                child: Container(
                  padding: EdgeInsets.symmetric(horizontal: 16),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Container(
                        child: Image.asset(
                          'assets/2.png',
                          width: 120,
                          height: 120,
                        ),
                      )
                    ],
                  ),
                )),
            Positioned(
              top: 160,
              child: Text(
                "AGROAPP",
                style: TextStyle(
                    color: Colors.green,
                    fontSize: 50,
                    fontWeight: FontWeight.bold),
              ),
            ),
            Positioned(bottom: 60, child: Paginas()),
          ],
        ),
      ),
    );
  }
}
