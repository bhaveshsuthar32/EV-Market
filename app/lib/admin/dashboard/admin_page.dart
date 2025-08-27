// import 'package:ev_market/view/home_page.dart';
// import 'package:flutter/material.dart';

// class AdminPage extends StatefulWidget {
//   const AdminPage({super.key});

//   @override
//   State<AdminPage> createState() => _AdminPageState();
// }

// class _AdminPageState extends State<AdminPage> {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         leading: Builder(
//           builder: (context) {
//             return IconButton(
//               onPressed: () {
//                 Scaffold.of(context).openDrawer();
//               },
//               icon: Icon(Icons.menu),
//               color: const Color.fromARGB(255, 30, 28, 28),
//             );
//           },
//         ),
//         title: const Text("Dashboard", style: TextStyle(color: Color.fromARGB(255, 11, 11, 11))),
//       ),

//          drawer: Drawer(
//         child: ListView(
//           padding: EdgeInsets.zero,
//           children: <Widget>[
//             // const DrawerHeader(
//             //   decoration: BoxDecoration(color: Colors.red),
//             //   // child: Text("EV-MARKET"),
//             //   child: SizedBox(
//             //     height: 50,
//             //     child: Text("EV-MARKET"),
//             //   ),
//             // ),
//             Container(
//               // height: 40,
//               alignment: Alignment.centerLeft,
//               padding: EdgeInsets.fromLTRB(40, 60, 40, 20),
//               decoration: BoxDecoration(color: Colors.blue[400]),
//               child: Text("EV-MARKET"),
//             ),
//             ListTile(
//               leading: TextButton(
//                 style: ButtonStyle(
//                   // ---------- working [ change bgcolor when i am hover button ]
//                 ),
//                 onPressed: () {
//                   Navigator.push(
//                     context,
//                     MaterialPageRoute(builder: (context) => Home_Page()),
//                   );
//                 },
//                 child: Text("Home Page"),
//               ),
//             ),
            
            
//           ],
//         ),
//       ),


//       body: Column(
//         children: [
//           Container(
//             padding: EdgeInsets.fromLTRB(10, 20, 0, 10),
//             child: Row(children: [
//                 Text("Welcome Admin")
//               ],
//             ),
//           ),
//         ],
//       ),
//     );
//   }
// }




import 'package:ev_market/admin/pages/brand/brand.dart';
import 'package:ev_market/user/home/home.dart';
import 'package:ev_market/admin/pages/wheeler-form/two-wheeler.dart';
import 'package:flutter/material.dart';

class AdminPage extends StatefulWidget {
  const AdminPage({super.key});

  @override
  State<AdminPage> createState() => _AdminPageState();
}

class _AdminPageState extends State<AdminPage> {
  @override
  Widget build(BuildContext context) {
    // final theme = Theme.of(context);

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 1,
        leading: Builder(
          builder: (context) {
            return IconButton(
              onPressed: () => Scaffold.of(context).openDrawer(),
              icon: const Icon(Icons.menu),
              color: Colors.black87,
            );
          },
        ),
        title: const Text(
          "Admin Dashboard",
          style: TextStyle(
            color: Colors.black87,
            fontWeight: FontWeight.bold,
          ),
        ),
        centerTitle: true,
      ),

      drawer: Drawer(
        shape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.horizontal(right: Radius.circular(20)),
        ),
        child: Column(
          children: [
            Container(
              height: 160,
              width: double.infinity,
              padding: const EdgeInsets.only(left: 20, top: 40),
              alignment: Alignment.centerLeft,
              decoration: BoxDecoration(
                color: Colors.blueAccent,
              ),
              child: const Text(
                "EV-MARKET",
                style: TextStyle(
                  fontSize: 26,
                  color: Colors.white,
                  fontWeight: FontWeight.w700,
                ),
              ),
            ),
            Expanded(
              child: ListView(
                padding: EdgeInsets.zero,
                children: [
                  _buildDrawerItem(
                    icon: Icons.home_outlined,
                    title: "Home Page",
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => const Home()),
                      );
                    },
                  ),
                  _buildDrawerItem(
                    icon: Icons.home_outlined,
                    title: "Two Wheeler",
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => const TwoWheelerForm()),
                      );
                    },
                  ),
                  _buildDrawerItem(
                    icon: Icons.branding_watermark,
                    title: "Brand",
                    onTap: () {
                      Navigator.push(context, MaterialPageRoute(builder: (context) => const BrandPage()),);
                    },
                  ),
                  _buildDrawerItem(
                    icon: Icons.logout,
                    title: "Logout",
                    onTap: () {},
                  ),
                ],
              ),
            ),
          ],
        ),
      ),

      body: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              "Welcome Admin 👋",
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            const Text(
              "Here's a quick summary of your dashboard.",
              style: TextStyle(
                fontSize: 16,
                color: Colors.black54,
              ),
            ),
            const SizedBox(height: 32),
            // Example card (can add more like analytics, etc.)
            _buildDashboardCard(
              title: "Total Users",
              value: "1,245",
              icon: Icons.people_alt_outlined,
              color: Colors.greenAccent,
            ),
            const SizedBox(height: 16),
            _buildDashboardCard(
              title: "Pending Orders",
              value: "23",
              icon: Icons.pending_actions_outlined,
              color: Colors.orangeAccent,
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildDrawerItem({
    required IconData icon,
    required String title,
    required VoidCallback onTap,
  }) {
    return ListTile(
      leading: Icon(icon, color: Colors.black87),
      title: Text(
        title,
        style: const TextStyle(fontSize: 16, color: Colors.black87),
      ),
      onTap: onTap,
      hoverColor: Colors.blue[50],
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
    );
  }

  Widget _buildDashboardCard({
    required String title,
    required String value,
    required IconData icon,
    required Color color,
  }) {
    return Container(
      decoration: BoxDecoration(
        color: color.withOpacity(0.15),
        borderRadius: BorderRadius.circular(12),
      ),
      padding: const EdgeInsets.all(20),
      child: Row(
        children: [
          Icon(icon, size: 36, color: color),
          const SizedBox(width: 16),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(title,
                  style: const TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w600,
                  )),
              Text(value,
                  style: const TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.bold,
                  )),
            ],
          ),
        ],
      ),
    );
  }
}
