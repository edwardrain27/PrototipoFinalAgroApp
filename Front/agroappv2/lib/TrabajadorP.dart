import 'dart:math';
import 'package:agroappv2/MyHomePage.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'dart:async';
import 'dart:convert';

class Terrenos extends StatefulWidget {
  Terrenos({Key? key}) : super(key: key);

  @override
  _TerrenosState createState() => _TerrenosState();
}

class _TerrenosState extends State<Terrenos> {
  Map? datat;
  List? trabajadoresData;

  getTrabajador() async {
    http.Response response =
        await http.get(Uri.parse('http://10.0.2.2:3000/api/trabajador'));
    datat = json.decode(response.body);
    setState(() {
      trabajadoresData = datat!['traba'];
    });
  }

  @override
  void initState() {
    super.initState();
    getTrabajador();
  }

  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Trabajadores',
          style: TextStyle(
              fontSize: 30.0,
              fontWeight: FontWeight.w600,
              color: Colors.yellow),
        ),
        backgroundColor: Colors.red,
      ),
      body: ListView.builder(
        itemCount: trabajadoresData == null ? 0 : trabajadoresData!.length,
        itemBuilder: (BuildContext context, int index) {
          return Card(
            child: Padding(
              padding: const EdgeInsets.all(12.0),
              child: Container(
                child: Row(
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    Padding(
                      padding: const EdgeInsets.all(12.0),
                      child: Text(
                        '$index',
                        style: TextStyle(
                            fontSize: 20.0, fontWeight: FontWeight.w500),
                      ),
                    ),
                    CircleAvatar(backgroundImage: AssetImage('assets/3.png')),
                    Padding(
                        padding: const EdgeInsets.all(10.0),
                        child: Column(
                          children: [
                            Text(
                              '${trabajadoresData![index]['t_nombre']} ',
                              style: TextStyle(
                                  fontSize: 20.0, fontWeight: FontWeight.w700),
                            ),
                            Text(
                              '${trabajadoresData![index]['t_salario_jormal']}',
                              style: TextStyle(
                                  fontSize: 20.0,
                                  fontWeight: FontWeight.w400,
                                  color: Colors.green),
                            )
                          ],
                        )),
                    Expanded(
                      child: Container(
                        alignment: Alignment.centerRight,
                        child: IconButton(
                          iconSize: 20.0,
                          icon: Icon(
                            Icons.add,
                            color: Colors.blue,
                          ),
                          onPressed: () => {},
                        ),
                      ),
                    )
                  ],
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
