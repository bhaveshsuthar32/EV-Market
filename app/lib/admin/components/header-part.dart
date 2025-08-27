// import 'package:ev_market/user/home/home.dart';
// import 'package:ev_market/admin/pages/wheeler-form/two-wheeler.dart';
// import 'package:flutter/material.dart';

// class HeaderPart extends StatefulWidget {
//   const HeaderPart({super.key});

//   @override
//   State<HeaderPart> createState() => _HeaderPartState();
// }

// class _HeaderPartState extends State<HeaderPart> {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         backgroundColor: Colors.white,
//         elevation: 1,
//         leading: Builder(
//           builder: (context) {
//             return IconButton(
//               onPressed: () => Scaffold.of(context).openDrawer(),
//               icon: const Icon(Icons.menu),
//               color: Colors.black87,
//             );
//           },
//         ),
//         title: const Text(
//           "Admin Dashboard",
//           style: TextStyle(color: Colors.black87, fontWeight: FontWeight.bold),
//         ),
//         centerTitle: true,
//       ),

//       drawer: Drawer(
//         shape: const RoundedRectangleBorder(
//           borderRadius: BorderRadius.horizontal(right: Radius.circular(20)),
//         ),
//         child: Column(
//           children: [
//             Container(
//               height: 160,
//               width: double.infinity,
//               padding: const EdgeInsets.only(left: 20, top: 40),
//               alignment: Alignment.centerLeft,
//               decoration: BoxDecoration(color: Colors.blueAccent),
//               child: const Text(
//                 "EV-MARKET",
//                 style: TextStyle(
//                   fontSize: 26,
//                   color: Colors.white,
//                   fontWeight: FontWeight.w700,
//                 ),
//               ),
//             ),
//             Expanded(
//               child: ListView(
//                 padding: EdgeInsets.zero,
//                 children: [
//                   _buildDrawerItem(
//                     icon: Icons.home_outlined,
//                     title: "Home Page",
//                     onTap: () {
//                       Navigator.push(
//                         context,
//                         MaterialPageRoute(builder: (context) => const Home()),
//                       );
//                     },
//                   ),
//                   _buildDrawerItem(
//                     icon: Icons.home_outlined,
//                     title: "Two Wheeler",
//                     onTap: () {
//                       Navigator.push(
//                         context,
//                         MaterialPageRoute(
//                           builder: (context) => const TwoWheelerForm(),
//                         ),
//                       );
//                     },
//                   ),
//                   _buildDrawerItem(
//                     icon: Icons.settings_outlined,
//                     title: "Settings",
//                     onTap: () {},
//                   ),
//                   _buildDrawerItem(
//                     icon: Icons.logout,
//                     title: "Logout",
//                     onTap: () {},
//                   ),
//                 ],
//               ),
//             ),
//           ],
//         ),
//       ),
//     );
//   }

//   Widget _buildDrawerItem({
//     required IconData icon,
//     required String title,
//     required VoidCallback onTap,
//   }) {
//     return ListTile(
//       leading: Icon(icon, color: Colors.black87),
//       title: Text(
//         title,
//         style: const TextStyle(fontSize: 16, color: Colors.black87),
//       ),
//       onTap: onTap,
//       hoverColor: Colors.blue[50],
//       shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
//     );
//   }

//   Widget _buildDashboardCard({
//     required String title,
//     required String value,
//     required IconData icon,
//     required Color color,
//   }) {
//     return Container(
//       decoration: BoxDecoration(
//         color: color.withOpacity(0.15),
//         borderRadius: BorderRadius.circular(12),
//       ),
//       padding: const EdgeInsets.all(20),
//       child: Row(
//         children: [
//           Icon(icon, size: 36, color: color),
//           const SizedBox(width: 16),
//           Column(
//             crossAxisAlignment: CrossAxisAlignment.start,
//             children: [
//               Text(
//                 title,
//                 style: const TextStyle(
//                   fontSize: 16,
//                   fontWeight: FontWeight.w600,
//                 ),
//               ),
//               Text(
//                 value,
//                 style: const TextStyle(
//                   fontSize: 22,
//                   fontWeight: FontWeight.bold,
//                 ),
//               ),
//             ],
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

class HeaderPart extends StatefulWidget {
  const HeaderPart({super.key});

  @override
  State<HeaderPart> createState() => _HeaderPartState();
}

class _HeaderPartState extends State<HeaderPart> {
  @override
  Widget build(BuildContext context) {
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
          style: TextStyle(color: Colors.black87, fontWeight: FontWeight.bold),
        ),
        centerTitle: true,
      ),

      drawer: _buildDrawer(context),

      body: Padding(
        padding: const EdgeInsets.all(16),
        child: GridView.count(
          crossAxisCount: 2,
          crossAxisSpacing: 16,
          mainAxisSpacing: 16,
          children: [
            _buildDashboardCard(
              title: "Total Vehicles",
              value: "120",
              icon: Icons.directions_car,
              color: Colors.blue,
            ),
            _buildDashboardCard(
              title: "Total Brands",
              value: "15",
              icon: Icons.business,
              color: Colors.green,
            ),
            _buildDashboardCard(
              title: "Pending Requests",
              value: "8",
              icon: Icons.pending_actions,
              color: Colors.orange,
            ),
            _buildDashboardCard(
              title: "Users",
              value: "1.2K",
              icon: Icons.people,
              color: Colors.purple,
            ),
          ],
        ),
      ),
    );
  }

  /// Drawer UI
  Widget _buildDrawer(BuildContext context) {
    return Drawer(
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
            decoration: const BoxDecoration(color: Colors.blueAccent),
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
                  icon: Icons.motorcycle,
                  title: "Two Wheeler",
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => const TwoWheelerForm(),
                      ),
                    );
                  },
                ),
                // _buildDrawerItem(
                //   icon: Icons.settings_outlined,
                //   title: "Settings",
                //   onTap: () {  Navigator.push(
                //       context,
                //       MaterialPageRoute(
                //         builder: (context) => const BrandPage(),
                //       ),
                //     );
                //   },
                // ),
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
    );
  }

  /// Drawer Item Widget
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

  /// Dashboard Card Widget
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
              Text(
                title,
                style: const TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.w600,
                ),
              ),
              Text(
                value,
                style: const TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

