import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (<>
    
    <View style={{
        backgroundColor:'gray',
        // marginTop:50
        flex:1,
        justifyContent:"center",
        alignItems:"center" 
        
      }}>
          <Text style={{
            fontSize:20,
            fontFamily:"sans-serif",
            color:"white",
            lineHeight:50,
            letterSpacing:1
          }}><Link href={'/'}>Home</Link>  |   <Link href={'/about'}>About</Link>   | <Link href={'/contact'}>Contact</Link>  |  <Link href={'/services'}>Services</Link> </Text>
      </View>

    
    
    
    <View style={{
        flex:3,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"gray"
        
    }}>
      <Text style={{
          color:"white",
          fontSize:50
        }}>Contact</Text>
    </View>




    <View style={{
  flex:1,
  backgroundColor:"gray",
  justifyContent:"center",
  alignItems:"center"
}}>
  <Text style={{
    fontSize:20
  }}><Link href={'https://github.com/MuahammadArsalan'}>Follow me on Github: /Muhammad Arsalan</Link></Text>
</View>
        </>
  )
}

export default Contact
