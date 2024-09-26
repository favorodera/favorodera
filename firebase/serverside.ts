import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getFirestore} from "firebase-admin/firestore";

const runtime = useRuntimeConfig();

const app =
  getApps().length === 0
    ? initializeApp({ credential: cert(runtime.firebaseServiceAccount) })
    : getApps()[0];

const database = getFirestore(app);

export { database, app};
