# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:
-keep class io.realm.** { *; }
-dontwarn io.realm.**
-keep class org.jivesoftware.smack.** { *; }
-keep class org.jivesoftware.smackx.** { *; }
-keep class org.jivesoftware.smack.initializer.VmArgInitializer
-keep class org.jivesoftware.** { *;}
-keep class org.bouncycastle.jcajce.provider.** { *; }
-keepattributes *Annotation*
-keepclassmembers class * {
  @org.greenrobot.eventbus.Subscribe <methods>;
}
-keep enum org.greenrobot.eventbus.ThreadMode { *; }
-keepclassmembers class * extends org.greenrobot.eventbus.util.ThrowableFailureEvent {
  <init>(java.lang.Throwable);
}
# SDK classes
-keep class com.ringme.ott.sdk.customer.vnpost.model.** { *; }
-keep class com.ringme.ott.sdk.model.** { *; }
-keep class com.ringme.ott.sdk.model.api.** { *; }
-keep class com.ringme.ott.sdk.model.eventbus.** { *; }
-keep,allowoptimization,allowshrinking public class com.ringme.ott.sdk.utils.MobileNumberValidation { *; }
-keep enum com.ringme.ott.sdk.values.Environment { *; }
-keep enum com.ringme.ott.sdk.values.** { *; }
-keep public interface com.ringme.ott.sdk.listener.OpenChatListener { *; }
-keep public interface com.ringme.ott.sdk.listener.RingmeChatLoginListener { *; }
-keep public interface com.ringme.ott.sdk.listener.UpdateUserInfoListener { *; }
-keep public interface com.ringme.ott.sdk.listener.** { *; }
-keep public interface com.ringme.ott.sdk.listener.OnNumberOfUnreadMessagesChangedListener { *; }
-keep class com.ringme.contact.model.** { *; }
-keep class com.ringme.contact.model.request.** { *; }
-keep class com.ringme.contact.model.response.** { *; }
-keep class com.ringme.contact.fragment.** { *; }
-keep enum com.ringme.api.values.** { *; }
-keep public interface com.ringme.api.interfaces.** { *; }
-keep class com.ringme.api.models.** { *; }
-keep class com.ringme.dao.model.** { *; }
-keep enum com.ringme.xmpp.modules.general.values.** { *; }
-keep enum com.ringme.xmpp.modules.general.values.ErrorCode { *; }
-keep enum com.ringme.xmpp.modules.general.models.ConnectionInfo { *; }
-keep enum com.ringme.xmpp.modules.general.models.ArchiveQueryResultItem { *; }
-keep enum com.ringme.xmpp.modules.general.models.ArchiveQueryResult { *; }
-keep public interface com.ringme.xmpp.modules.general.listener.** { *; }
