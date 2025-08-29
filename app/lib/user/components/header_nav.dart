
// import 'package:flutter/material.dart';

// class HeaderNav extends StatelessWidget {
//   const HeaderNav({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return AppBar(
//         leading: Builder(
//           builder: (context) {
//             return IconButton(
//               onPressed: () {
//                 Scaffold.of(context).openDrawer();
//               },
//               icon: Icon(Icons.menu),
//               color: Colors.white,
//             );
//           },
//         ),
//         actionsPadding: const EdgeInsets.fromLTRB(10, 5, 10, 5),
//         backgroundColor: const Color.fromARGB(255, 0, 0, 0),

//         title: const Text("EV-Market", style: TextStyle(color: Colors.white)),
//         actions: [
//           IconButton(
//             onPressed: () {},
//             icon: Icon(Icons.settings, color: Colors.white),
//           ),
//         ],
//       );
    
//   }
// }


import 'package:flutter/material.dart';

class HeaderNav extends StatefulWidget implements PreferredSizeWidget {
  const HeaderNav({super.key});

  @override
  State<HeaderNav> createState() => _HeaderNavState();

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}

class _HeaderNavState extends State<HeaderNav> {
  @override
  Widget build(BuildContext context) {
    return AppBar(
      leading: Builder(
        builder: (context) {
          return IconButton(
            onPressed: () {
              Scaffold.of(context).openDrawer();
            },
            icon: const Icon(Icons.menu),
            color: Colors.white,
          );
        },
      ),
      actionsPadding: const EdgeInsets.fromLTRB(10, 5, 10, 5),
      backgroundColor: const Color.fromARGB(255, 0, 0, 0),
      title: const Text("EV-Market", style: TextStyle(color: Colors.white)),
      actions: [
        IconButton(
          onPressed: () {},
          icon: const Icon(Icons.settings, color: Colors.white),
        ),
      ],
    );
  }
}
