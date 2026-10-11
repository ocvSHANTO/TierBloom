# TierBloom 1.1.0 আপডেট (Termux)

আপনার repo ফোল্ডারের **ভেতরে** থেকে (যেখানে index.html আছে) চালান। ZIP-টা repo-র বাইরে, যেমন Download-এ আছে ধরে:

```bash
cd ~/TierBloom
git pull
unzip -o ~/storage/downloads/TierBloom-1.1.0-update.zip -d /tmp/tb-up
cp -r /tmp/tb-up/TierBloom/. .
git add .
git commit -m "Release 1.1.0: save and open boards"
git push
```

১-২ মিনিট পরে লাইভ সাইট নতুন হবে। পুরোনো ভার্সন দেখালে একবার পেজ রিফ্রেশ করে আবার খুলুন।

GitHub-এ Releases > Draft a new release > tag `v1.1.0` দিয়ে release বানাতে পারেন। Notes: CHANGELOG.md থেকে নিন।
