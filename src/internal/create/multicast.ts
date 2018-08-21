import { ConnectableObservable } from '../ConnectableObservable';
import { Observable } from '../Observable';
import { Subject } from '../Subject';
import { isObserver } from '../util/isObserver';

export function multicast<T>(source: Observable<T>, subjectOrFactory: Subject<T>|(() => Subject<T>)): ConnectableObservable<T> {
  const subjectFactory = isObserver(subjectOrFactory) ? () => subjectOrFactory as Subject<T> : subjectOrFactory as (() => Subject<T>);
  return new ConnectableObservable(source, subjectFactory);
}
