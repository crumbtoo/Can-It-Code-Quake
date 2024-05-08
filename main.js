codeFetch('Oats/Quake3.sh').then((result) => {
  document.getElementById('bash').innerHTML = result
});

codeFetch('Oats/Quake3.c').then((result) => {
  document.getElementById('cpp').innerHTML = result
});

codeFetch('Oats/Quake3.cs').then((result) => {
  document.getElementById('cs').innerHTML = result
});

codeFetch('Oats/Quake3.dart').then((result) => {
  document.getElementById('dart').innerHTML = result
});

codeFetch('Oats/Quake3.f95').then((result) => {
  document.getElementById('fort').innerHTML = result
});

codeFetch('Oats/Quake3.go').then((result) => {
  document.getElementById('golan').innerHTML = result
});

codeFetch('Oats/Quake3.gd').then((result) => {
  document.getElementById('gdscript').innerHTML = result
});

codeFetch('Oats/Quake3.java').then((result) => {
  document.getElementById('java').innerHTML = result
});

codeFetch('Oats/Quake3.js').then((result) => {
  document.getElementById('js').innerHTML = result
});

codeFetch('Oats/Quake3.lua').then((result) => {
  document.getElementById('lua').innerHTML = result
});

codeFetch('Oats/Quake3.nim').then((result) => {
  document.getElementById('nim').innerHTML = result
});

codeFetch('Oats/Quake3.py').then((result) => {
  document.getElementById('python').innerHTML = result
});

codeFetch('Oats/Quake3.swift').then((result) => {
  document.getElementById('swift').innerHTML = result
});

codeFetch('Oats/Quake3.rs').then((result) => {
  document.getElementById('rust').innerHTML = result
});

codeFetch('Oats/Quake3.vbs').then((result) => {
  document.getElementById('vbs').innerHTML = result
});

codeFetch('Oats/Quake3.v').then((result) => {
  document.getElementById('vlan').innerHTML = result
});

codeFetch('Oats/Quake3.zig').then((result) => {
  document.getElementById('zig').innerHTML = result
});

async function codeFetch(path) {
  let response = await fetch(path);
  let data = await response.text();
  return data;
}