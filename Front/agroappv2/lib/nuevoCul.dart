import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:dropdownfield/dropdownfield.dart';
import 'dart:async';
import 'dart:convert';

class NewCult extends StatefulWidget {
  NewCult({Key? key}) : super(key: key);

  @override
  _NewCultState createState() => _NewCultState();
}

class _NewCultState extends State<NewCult> {
  Map? datater;
  List? terrenosData;
  getTerrenos() async {
    http.Response response =
        await http.get(Uri.parse('http://10.0.2.2:3000/api/terrenos'));
    datater = json.decode(response.body);
    setState(() {
      terrenosData = datater!['terreno'];
    });
  }

  @override
  void initState() {
    super.initState();
    getTerrenos();
  }

  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Agregar Cultivo'),
        actions: [
          IconButton(onPressed: () => {}, icon: Icon(Icons.exit_to_app))
        ],
      ),
      body: SingleChildScrollView(
        child: Container(
          padding: EdgeInsets.all(15.0),
          child: Form(
              child: Column(
            children: [
              _crearTerrenos(),
              // _crearSubterrenos(),
              // _crearCultivo(),
            ],
          )),
        ),
      ),
    );
  }

  final terrenoSelected = TextEditingController();
  String selectTerreno = '';
  Widget _crearTerrenos() {
    return DropDownField(
      controller: terrenoSelected,
      hintText: 'Seleccione Terreno',
      enabled: true,
      items: terrenosData,
      onValueChanged: (value) {
        setState(() {
          selectTerreno = value;
        });
      },
    );
  }
}

//   Widget _crearSuberrenos() {
//     return SizedBox(
//       height: 1000,
//       child: ListView.builder(
//           itemCount: terrenosData == null ? 0 : terrenosData!.length,
//           itemBuilder: (BuildContext context, int index) {
//             return DropdownButtonFormField(items: terrenosData![index]);
//           }),
//     );
//   }

//   Widget _crearCultivo() {
//     return SizedBox(
//       height: 1000,
//       child: ListView.builder(
//           itemCount: terrenosData == null ? 0 : terrenosData!.length,
//           itemBuilder: (BuildContext context, int index) {
//             return DropdownButtonFormField(items: terrenosData![index]);
//           }),
//     );
//   }

