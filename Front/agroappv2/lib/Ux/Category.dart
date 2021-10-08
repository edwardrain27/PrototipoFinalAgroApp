import 'package:flutter/material.dart';

class Category {
  String? tipo;
  IconData icon;
  String title;
  int totalTask;

  Category({
    required this.tipo,
    required this.icon,
    required this.title,
    required this.totalTask,
  });
}

List<Category> categoryList = [
  Category(
    tipo: 'Cultivos',
    icon: Icons.add,
    totalTask: 20,
    title: 'Agregar Cultivos',
  ),
  Category(
    tipo: 'Terrenos',
    icon: Icons.ac_unit,
    totalTask: 7,
    title: 'Agregar Terrenos',
  )
];
