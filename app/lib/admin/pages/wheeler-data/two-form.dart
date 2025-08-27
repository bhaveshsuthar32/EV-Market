import 'package:ev_market/admin/components/header-part.dart';
import 'package:flutter/material.dart';

class TwoForm extends StatefulWidget {
  const TwoForm({super.key});

  @override
  State<TwoForm> createState() => _TwoFormState();
}

class _TwoFormState extends State<TwoForm> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: HeaderPart(),
    );
  }
}