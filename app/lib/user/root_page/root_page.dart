import 'package:ev_market/admin/components/login/login.dart';
import 'package:ev_market/admin/dashboard/admin_page.dart';
import 'package:ev_market/user/about/about.dart';
import 'package:ev_market/user/components/bottom_nav.dart';
import 'package:ev_market/user/components/drawer_comp.dart';
// import 'package:ev_market/user/components/drawer_comp.dart';
import 'package:ev_market/user/components/header_nav.dart';
import 'package:ev_market/user/contact/contact_page.dart';
import 'package:ev_market/user/home/home.dart';
import 'package:flutter/material.dart';

class RootPage extends StatefulWidget {
  const RootPage({super.key});



  @override
  State<RootPage> createState() => _RootPageState();
}

class _RootPageState extends State<RootPage> {
  int _currentIndex = 0;

    final List<Widget> _pages = [
      Home(),
      About(),
      ContactPage(),
      Login(),
      AdminPage(),

  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: HeaderNav(),
      drawer: DrawerComp(),
      body: _pages[_currentIndex],
      bottomNavigationBar: BottomNav(currentIndex: _currentIndex, onTap: (index){
        setState(() {
          _currentIndex = index ;
        });
      }),
    );
  }
}