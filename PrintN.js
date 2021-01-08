function print(current, limit) {
  if (current === limit) return;
  else {
    console.log(current);
    print(current+1, limit);
  }
}
print(0, 10);
