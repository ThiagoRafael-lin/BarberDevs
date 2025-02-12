// import { Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
// import * as MediaLibrary from 'expo-media-library'
// import { useEffect, useState, useRef } from 'react';
// import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons'
// import { MaterialIcons } from '@expo/vector-icons';
// import { Camera, CameraType } from 'expo-camera';
// import { ContainerCamera } from '../../components/Container/Container';

// export const CameraPrescription = ({ navigation }) => {

//   const cameraRef = useRef(null)
//   const [openModal, setOpenModal] = useState(false)
  
//   const [photo, setPhoto] = useState(null)
//   const [tipoCamera, setTipoCamera] = useState(null)


//   async function CapturePhoto() {
//     if (cameraRef) {
//       const photo = await cameraRef.current.takePictureAsync()

//       setPhoto(photo.uri)
//       setOpenModal(true)
//     }
//   }



//   function ClearPhoto() {
//     setPhoto(null)
//     setOpenModal(false)
//   }

//   return (
//     <View style={styles.container}>
//       <Camera
//         ref={cameraRef}
//         type={tipoCamera}
//         style={styles.camera}
//         ratio='16:9'>

//         <View style={styles.viewFlip}>
//           <TouchableOpacity
//             style={styles.btnFlip}
//            >
//             <Ionicons name='camera-reverse' size={40} color="#FFF" />

//           </TouchableOpacity>
//         </View>

//       </Camera>

//       <ContainerCamera>

//         <TouchableOpacity style={styles.btnCapture} onPress={() => CapturePhoto()}>
//           <FontAwesome name='camera' size={23} color="#FFF" />
//         </TouchableOpacity>
      
//         <TouchableOpacity style={styles.btnCancel}>
//           <MaterialIcons name="cancel" size={30} color="black" />
//         </TouchableOpacity>
        
//       </ContainerCamera>




//       <Modal animationType='slide' transparent={false} visible={openModal}>
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>

//           <Image
//             style={{ width: "100%", height: 500, borderRadius: 15 }}
//             source={{ uri: photo }}
//           />

//           <View style={{ margin: 10, flexDirection: 'row', gap: 20 }}>
//             Botoes de controle

//             <TouchableOpacity style={styles.btnClear} onPress={() => ClearPhoto()}>
//               <AntDesign name='closecircle' size={50} color="#ff0000" />
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.btnUpload} onPress={() => UploadPhoto()}>
//               <FontAwesome name='upload' size={50} color="#FFF" />
//             </TouchableOpacity>

//           </View>
//         </View>
//       </Modal>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   camera: {
//     flex: 1,
//     height: "80%",
//     width: "100%"
//   },

//   viewFlip: {
//     flex: 1,
//     backgroundColor: 'transparent',
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     justifyContent: 'center'
//   },

//   btnFlip: {
//     padding: 20
//   },

//   txtFlip: {
//     fontSize: 20,
//     color: '#FFF',
//     marginBottom: 20
//   },

//   btnCapture: {
//     padding: 20,
//     margin: 20,
//     borderRadius: 50,
//     backgroundColor: "#121212",
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btnCancel: {
//     padding: 20,
//     margin: 20,
//     borderRadius: 50,
//     backgroundColor: "transparent",
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btnClear: {
//     margin: 20,
//     borderRadius: 50,
//     backgroundColor: "#FFF",
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btnUpload: {
//     margin: 20,
//     borderRadius: 50,
//     backgroundColor: "#000",
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   btnFlash: {
//     padding: 20,
//     marginBottom: 20,
//     borderRadius: 20,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });
