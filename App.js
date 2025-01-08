import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

export default function DangNhap() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleContinue = () => {
    Alert.alert("Thông báo", `Số điện thoại của bạn: ${phoneNumber}`);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>ĐĂNG NHẬP</Text>
        <Text style={styles.subtitle}>Nhập số điện thoại của bạn</Text>
        
        {/* Instruction text placed above TextInput */}
        <Text style={styles.instruction}>
          Dùng số điện thoại của bạn để đăng nhập hoặc đăng ký tài khoản tại đây:
        </Text>
        
        <TextInput
          style={styles.input}
          keyboardType="numeric" 
          placeholder="Số điện thoại"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        
        <View style={styles.buttonContainer}>
          <Button title="Tiếp tục" onPress={handleContinue} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  instruction: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10, // Adjust spacing between text and input
    color: "gray",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
