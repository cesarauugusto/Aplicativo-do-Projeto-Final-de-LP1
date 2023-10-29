
#include <WiFi.h>
#include <FirebaseESP32.h>
#include <FirebaseJson.h>
#include<stdlib.h>

char buff[10];
#define FIREBASE_HOST "https://appmlpe-default-rtdb.firebaseio.com/"
#define FIREBASE_AUTH "9rtvXJt9AizSXVjWHT0GZwbNyAJwik6JiQm7sANP"
//#define WIFI_SSID "SOBRALNET_CESAR"
#define WIFI_SSID "wifissid"
#define WIFI_PASSWORD "senha"
#define sensor D3

FirebaseData firebaseData;
FirebaseJson json;

void setup()
{
  Serial.begin(115200);
  
  //Inicia a comunicação com o ESP32
  
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  //Inicia a comunicação entre ESP32 e FireBase
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);

  //Define o tempo limite de leitura do banco de dados para 1 minuto (Máximo 15 Minutos)
  Firebase.setReadTimeout(firebaseData, 1000 * 60);
  //tiny, small, medium, large and unlimited.
  //Size and its write timeout e.g. tiny (1s), small (10s), medium (30s) and large (60s).
  Firebase.setwriteSizeLimit(firebaseData, "tiny");

  /*Esta opção permite que as funções (PUT  e DELETE HTTP) Funcionem para dispotivos
   * conectados por trás do firewall que permite apenas solicitações GET e POST.
   * PUT - Atualiza
   * DELETE - Apaga 
   * GET - Ler 
   * POST - Cria
  */
 // Firebase.enableClassicRequest(firebaseData, true);
  

   //String path = "/data";
   Serial.println("-----------------");
   Serial.println("Connected...");
  
}

void loop()
  {
    json.add("value",3);
    json.set("/controlador/corrente", 2;
    json.set("/controlador/potencia", 2);
    json.set("/controlador/temperatura", 45);
    json.set("/controlador/tensao", 12);
    Firebase.updateNode(firebaseData,"/MLPE", json);
     delay(1000); 
   
    

}
