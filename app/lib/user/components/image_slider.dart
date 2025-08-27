// import 'package:flutter/material.dart';
// import 'package:carousel_slider/carousel_slider.dart';

// class ImageSlider extends StatefulWidget {
//   const ImageSlider({super.key});

//   @override
//   State<ImageSlider> createState() => _ImageSliderState();
// }

// class _ImageSliderState extends State<ImageSlider> {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         foregroundColor: Colors.white,
//         backgroundColor: Colors.green,
//         title: Text("Image Slider"),
//       ),
//       body: ListView(
//         children: [
//           CarouselSlider(
//             items: [
//               // 1st Image of Slider
//               Container(
//                 margin: EdgeInsets.all(6.0),
//                 decoration: BoxDecoration(
//                   borderRadius: BorderRadius.circular(8.0),
//                   image: DecorationImage(
//                     image: NetworkImage("https://via.placeholder.com/400x200"),
//                     fit: BoxFit.cover,
//                   ),
//                 ),
//               ),
              
//               // 2nd Image of Slider
//               Container(
//                 margin: EdgeInsets.all(6.0),
//                 decoration: BoxDecoration(
//                   borderRadius: BorderRadius.circular(8.0),
//                   image: DecorationImage(
//                     image: NetworkImage("https://via.placeholder.com/400x200"),
//                     fit: BoxFit.cover,
//                   ),
//                 ),
//               ),
              
//               // 3rd Image of Slider
//               Container(
//                 margin: EdgeInsets.all(6.0),
//                 decoration: BoxDecoration(
//                   borderRadius: BorderRadius.circular(8.0),
//                   image: DecorationImage(
//                     image: NetworkImage("https://via.placeholder.com/400x200"),
//                     fit: BoxFit.cover,
//                   ),
//                 ),
//               ),
              
//               // 4th Image of Slider
//               Container(
//                 margin: EdgeInsets.all(6.0),
//                 decoration: BoxDecoration(
//                   borderRadius: BorderRadius.circular(8.0),
//                   image: DecorationImage(
//                     image: NetworkImage("https://via.placeholder.com/400x200"),
//                     fit: BoxFit.cover,
//                   ),
//                 ),
//               ),
              
//               // 5th Image of Slider
//               Container(
//                 margin: EdgeInsets.all(6.0),
//                 decoration: BoxDecoration(
//                   borderRadius: BorderRadius.circular(8.0),
//                   image: DecorationImage(
//                     image: NetworkImage("https://via.placeholder.com/400x200"),
//                     fit: BoxFit.cover,
//                   ),
//                 ),
//               ),
//             ],
//             options: CarouselOptions(
//               height: 180.0,
//               enlargeCenterPage: true,
//               autoPlay: true,
//               aspectRatio: 16 / 9,
//               autoPlayCurve: Curves.fastOutSlowIn,
//               enableInfiniteScroll: true,
//               autoPlayAnimationDuration: Duration(milliseconds: 800),
//               viewportFraction: 0.8,
//             ),
//           ),
//         ],
//       ),
//     );
//   }
// }
