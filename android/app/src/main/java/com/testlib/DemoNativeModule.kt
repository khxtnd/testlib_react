package com.testlib

import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.ringme.ott.sdk.RingmeOttSdk
import com.ringme.ott.sdk.listener.RingmeChatLoginListener
import com.ringme.ott.sdk.model.UserInfo

class DemoNativeModule (reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "DemoNativeModule"
    }

    @ReactMethod
    fun loginChat(username: String, password: String, phoneNumber: String){
        Log.e("khanhpq",username+" "+password+ " "+phoneNumber)
        RingmeOttSdk.getUserInfo()?.password
        try {

            RingmeOttSdk.login(username, password,phoneNumber, object : RingmeChatLoginListener {
                override fun onLoginSuccessful(userInfo: UserInfo) {
                    RingmeOttSdk.updateUserInfo(userInfo, null)
                    RingmeOttSdk.openChatList(currentActivity!!.applicationContext)
                }
                override fun onLoginProcessError(errorCode: Int, e: Exception?) {
                    if(errorCode==99){
                        RingmeOttSdk.openChatList(currentActivity!!.applicationContext)
                        return
                    }
                }

                override fun onLoginRetry(turn: Int) {
                }
            })


        } catch (e: Exception) {
            e.printStackTrace()
        }
    }
}