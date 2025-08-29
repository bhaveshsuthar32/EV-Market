import 'package:ev_market/admin/components/login/login.dart';
import 'package:ev_market/admin/dashboard/admin_page.dart';
import 'package:ev_market/user/about/about.dart';
import 'package:ev_market/user/contact/contact_page.dart';
import 'package:flutter/material.dart';

class DrawerComp extends StatefulWidget {
  const DrawerComp({super.key});

  @override
  State<DrawerComp> createState() => _DrawerCompState();
}

class _DrawerCompState extends State<DrawerComp> {
  @override
  Widget build(BuildContext context) {
    return Drawer(
        child: Column(
          children: [
            // 🔹 Profile Header
            UserAccountsDrawerHeader(
              decoration: const BoxDecoration(
                color: Color(0xFF1976D2), // Blue background
              ),
              accountName: const Text(
                "James Martin",
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              accountEmail: const Text("james012@gmail.com"),
              currentAccountPicture: const CircleAvatar(
                backgroundImage: NetworkImage(
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", // profile image
                ),
              ),
            ),

            // 🔹 Menu Items
            ListTile(
              leading: const Icon(Icons.info_outline),
              title: const Text("About Us"),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const About()),
                );
              },
            ),
            ListTile(
              leading: const Icon(Icons.contact_page_outlined),
              title: const Text("Contact Us"),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const ContactPage()),
                );
              },
            ),
            ListTile(
              leading: const Icon(Icons.login),
              title: const Text("Login"),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const Login()),
                );
              },
            ),
            ListTile(
              leading: const Icon(Icons.admin_panel_settings),
              title: const Text("Admin"),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const AdminPage()),
                );
              },
            ),
          ],
        ),
    );
  }
}
