## nohup

- 실행

```python
nohup python filename &
```

- 강제종료

```python
ps -ef | grep 'python filename' | awk '{print $2}' | xargs kill
```
