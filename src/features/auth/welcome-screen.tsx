import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, Modal, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppleMark, CodegramMark, GoogleMark } from './brand-icons';

type Provider = 'google' | 'apple';
type WelcomeScreenProps = { onSignIn?: (provider: Provider) => Promise<void> };

/** The Clerk container supplies onSignIn once provider credentials are configured. */
export default function WelcomeScreen({ onSignIn }: WelcomeScreenProps) {
  const { height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [pending, setPending] = useState<Provider | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [legal, setLegal] = useState<'Terms of Service' | 'Privacy Policy' | null>(null);
  const canvasHeight = Math.max(height, error ? 800 : 720);
  const contentScale = Math.min(canvasHeight / 904, 1);

  async function signIn(provider: Provider) {
    if (pending) return;
    setError(null);
    if (!onSignIn) {
      setError('Sign-in is unavailable right now. Please try again later.');
      return;
    }
    setPending(provider);
    try {
      await onSignIn(provider);
    } catch {
      setError('We couldn’t sign you in. Please try again.');
    } finally {
      setPending(null);
    }
  }

  return (
    <View className="flex-1 items-center bg-[#080b0e]">
      <StatusBar style="light" />
      <ScrollView style={styles.scroll} contentContainerStyle={{ flexGrow: 1 }} bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{ minHeight: canvasHeight }} className="relative w-full overflow-hidden bg-[#080b0e]">
          <View pointerEvents="none" accessible={false} style={[styles.scenery, { height: canvasHeight * 0.46 }]}>
            <Image source={require('@/assets/images/auth/mountain-dusk.png')} contentFit="fill" style={{ position: 'absolute', top: 0, width: '100%', height: canvasHeight * 0.29 }} accessible={false} />
            <LinearGradient colors={['transparent', 'rgba(8,11,14,0.15)', 'rgba(8,11,14,0.96)', '#080b0e']} locations={[0, 0.25, 0.7, 0.8]} style={{ position: 'absolute', left: 0, right: 0, top: canvasHeight * 0.2, height: canvasHeight * 0.11 }} />
          </View>

          <View style={{ paddingTop: canvasHeight * 0.275 }} className="items-center px-7">
            <View style={[styles.logo, { width: 96 * contentScale, height: 96 * contentScale }]} accessibilityLabel="Codegram logo" accessibilityRole="image"><CodegramMark size={76 * contentScale} /></View>
            <Text accessibilityRole="header" style={[styles.title, { fontSize: 40 * contentScale, lineHeight: 46 * contentScale }]}>Codegram</Text>
            <Text style={[styles.description, { fontSize: 21 * contentScale, lineHeight: 30 * contentScale, marginTop: 29 * contentScale }]}>{'Share your world in photos\nand videos. Follow friends,\ndiscover new people, and\nstay connected.'}</Text>
          </View>

          <View style={[styles.actions, { bottom: canvasHeight * 0.15 + Math.max(insets.bottom - 20, 0) }]}>
            {error && <Text accessibilityRole="alert" accessibilityLiveRegion="polite" style={styles.error}>{error}</Text>}
            {(['google', 'apple'] as const).map((provider) => (
              <Pressable key={provider} accessibilityRole="button" accessibilityLabel={`Continue with ${provider === 'google' ? 'Google' : 'Apple'}`} accessibilityState={{ disabled: pending !== null, busy: pending === provider }} disabled={pending !== null} onPress={() => signIn(provider)}
                style={({ pressed }) => [styles.button, provider === 'google' ? styles.googleButton : styles.appleButton, { opacity: pressed ? 0.8 : pending && pending !== provider ? 0.55 : 1 }]}>
                {pending === provider ? <ActivityIndicator color={provider === 'google' ? '#111' : '#fff'} /> : provider === 'google' ? <GoogleMark /> : <AppleMark />}
                <Text style={[styles.buttonLabel, { color: provider === 'google' ? '#111215' : '#fff' }]}>Continue with {provider === 'google' ? 'Google' : 'Apple'}</Text>
              </Pressable>
            ))}
          </View>

          <View style={[styles.footer, { bottom: Math.max(insets.bottom + 16, canvasHeight * 0.045) }]}>
            <Text style={styles.legalCopy}>By continuing, you agree to Codegram’s</Text>
            <View className="flex-row items-center justify-center">
              <Pressable accessibilityRole="link" onPress={() => setLegal('Terms of Service')} hitSlop={10}><Text style={styles.legalLink}>Terms of Service</Text></Pressable>
              <Text style={styles.legalCopy}> and </Text>
              <Pressable accessibilityRole="link" onPress={() => setLegal('Privacy Policy')} hitSlop={10}><Text style={styles.legalLink}>Privacy Policy.</Text></Pressable>
            </View>
          </View>
        </View>
      </ScrollView>

      <Modal visible={legal !== null} transparent animationType="fade" onRequestClose={() => setLegal(null)}>
        <View className="flex-1 items-center justify-center bg-black/70 px-7">
          <View accessibilityViewIsModal className="w-full max-w-sm rounded-2xl border border-[#424851] bg-[#171c22] p-6">
            <Text accessibilityRole="header" className="mb-3 text-xl font-bold text-white">{legal}</Text>
            <Text className="mb-6 text-base leading-6 text-[#c4c9d0]">This document hasn’t been published yet. Please check back before creating an account.</Text>
            <Pressable accessibilityRole="button" onPress={() => setLegal(null)} className="min-h-12 items-center justify-center rounded-xl bg-[#0a84ff]"><Text className="text-base font-semibold text-white">Close</Text></Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, width: '100%', maxWidth: 480 },
  scenery: { position: 'absolute', top: 0, left: 0, right: 0 },
  logo: { width: 96, height: 96, borderRadius: 20, backgroundColor: '#071d32', alignItems: 'center', justifyContent: 'center' },
  title: { color: '#f9fafb', fontSize: 40, lineHeight: 46, fontWeight: '700', letterSpacing: -0.9, marginTop: 8 },
  description: { marginTop: 29, color: '#f3f4f5', fontSize: 21, lineHeight: 30, textAlign: 'center', fontWeight: '400' },
  actions: { position: 'absolute', left: 20, right: 20, gap: 16 },
  button: { minHeight: 58, borderRadius: 16, borderWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 13, paddingHorizontal: 14, paddingVertical: 12 },
  googleButton: { backgroundColor: '#fff', borderColor: '#e6e7e9' },
  appleButton: { backgroundColor: '#2b3038', borderColor: '#49515c' },
  buttonLabel: { fontSize: 18, lineHeight: 24, fontWeight: '600', letterSpacing: -0.3 },
  footer: { position: 'absolute', left: 20, right: 20, alignItems: 'center' },
  legalCopy: { color: '#c5c7cc', fontSize: 15, lineHeight: 20, textAlign: 'center' },
  legalLink: { color: '#0a9bff', fontSize: 15, lineHeight: 20, fontWeight: '600' },
  error: { color: '#ffb9b9', fontSize: 14, lineHeight: 20, textAlign: 'center', marginBottom: 2 },
});
